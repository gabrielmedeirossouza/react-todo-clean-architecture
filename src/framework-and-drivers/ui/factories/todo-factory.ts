import { TodoController } from "@/interface-adapters/controllers/todo";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { IRemoveTodoViewModel } from "@/interface-adapters/interfaces/todo/remove-todo-view-model";
import { CreateTodoPresenter } from "@/interface-adapters/presenters/todo";
import { RemoveTodoPresenter } from "@/interface-adapters/presenters/todo/remove-todo-presenter";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { CreateTodoUseCase } from "@/use-cases/todo-use-case";
import { RemoveTodoUseCase } from "@/use-cases/todo-use-case/remove-todo-use-case";
import { TodoValidationService } from "@/use-cases/todo-use-case/todo-validation-service";

interface ITodoFactory {
	create?: ICreateTodoViewModel;
	remove?: IRemoveTodoViewModel;
}

export function todoFactory({ create, remove }: ITodoFactory) {
	const todoRepository = new InMemoryTodoRepository();
	const todoValidationService = new TodoValidationService();

	const createTodoPresenter = new CreateTodoPresenter({
		onCreateTodoSuccess: create?.onCreateTodoSuccess,
		onCreateTodoFailField: create?.onCreateTodoFailField,
		onCreateTodoFailMessage: create?.onCreateTodoFailMessage
	});
	const createTodoUseCase = new CreateTodoUseCase(todoValidationService, todoRepository, createTodoPresenter);

	const removeTodoPresenter = new RemoveTodoPresenter({
		onRemoveTodoSuccess: remove?.onRemoveTodoSuccess,
		onRemoveTodoFailMessage: remove?.onRemoveTodoFailMessage
	});
	const removeTodoUseCase = new RemoveTodoUseCase(todoRepository, removeTodoPresenter);

	const todoController = new TodoController(createTodoUseCase, removeTodoUseCase);
	console.log("todoFactory created");

	return todoController;
}
