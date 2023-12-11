import { create } from "zustand";
import { TodoController } from "@/interface-adapters/controllers/todo";
import { CreateTodoPresenter, DeleteTodoPresenter } from "@/interface-adapters/presenters/todo";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { CreateTodoUseCase, DeleteTodoUseCase } from "@/use-cases/todo-use-case";
import { TodoValidationService } from "@/use-cases/todo-use-case/todo-validation-service";

type TTodo = Readonly<{
	id: string;
	title: string;
	description: string;
	isCompleted: boolean;
}>

interface ITodoState {
	todoList: TTodo[];
	createTodo: (title: string, description: string) => void;
	deleteTodoById: (id: string) => void;
}

export const useTodoStore = create<ITodoState>()((set) => {
	const todoValidationService = new TodoValidationService();
	const todoInMemoryRepository = new InMemoryTodoRepository();

	const createTodoPresenter = new CreateTodoPresenter(({ viewModel }) => {
		if (viewModel.ok) {
			return set((state) => ({
				...state,
				todoList: [
					...state.todoList,
					viewModel.value
				]
			}));
		}

		console.error(viewModel.error);
	});

	const deleteTodoPresenter = new DeleteTodoPresenter(({ viewModel }) => {
		if (viewModel.ok) {
			return set((state) => ({
				...state,
				todoList: state.todoList.filter((todo) => todo.id !== viewModel.value)
			}));
		}

		console.error(viewModel.error);
	});

	const createTodoUseCase = new CreateTodoUseCase(
		todoValidationService,
		todoInMemoryRepository,
		createTodoPresenter
	);

	const deleteTodoUseCase = new DeleteTodoUseCase(
		todoInMemoryRepository,
		deleteTodoPresenter
	);

	const todoController = new TodoController(
		createTodoUseCase,
		deleteTodoUseCase
	);

	return {
		todoList: [],
		createTodo: async (title, description) => await todoController.createTodo(title, description),
		deleteTodoById: async (id) => await todoController.deleteTodoById(id)
	};
});
