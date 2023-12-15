import { TodoController } from "@/interface-adapters/controllers/todo";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { IRemoveTodoViewModel } from "@/interface-adapters/interfaces/todo/remove-todo-view-model";
import { CreateTodoPresenter } from "@/interface-adapters/presenters/todo";
import { RemoveTodoPresenter } from "@/interface-adapters/presenters/todo/remove-todo-presenter";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { CreateTodoUseCase } from "@/use-cases/todo-use-case";
import { RemoveTodoUseCase } from "@/use-cases/todo-use-case/remove-todo-use-case";
import { TodoValidationService } from "@/use-cases/todo-use-case/todo-validation-service";
import { observableFactory } from "./observable-factory";

export function todoFactory() {
	const todoRepository = new InMemoryTodoRepository();
	const todoValidationService = new TodoValidationService();

	const createTodoPresenterObservable = {
		createTodoSuccess: observableFactory(),
		createTodoFailField: observableFactory(),
		createTodoFailMessage: observableFactory()
	} satisfies ICreateTodoViewModel;

	const removeTodoPresenterObservable = {
		removeTodoSuccess: observableFactory(),
		removeTodoFailMessage: observableFactory()
	} satisfies IRemoveTodoViewModel;

	const createTodoPresenter = new CreateTodoPresenter(createTodoPresenterObservable);
	const createTodoUseCase = new CreateTodoUseCase(todoValidationService, todoRepository, createTodoPresenter);

	const removeTodoPresenter = new RemoveTodoPresenter(removeTodoPresenterObservable);
	const removeTodoUseCase = new RemoveTodoUseCase(todoRepository, removeTodoPresenter);

	const todoController = new TodoController(createTodoUseCase, removeTodoUseCase);

	return {
		todoController,
		createTodoPresenterObservable,
		removeTodoPresenterObservable
	};
}
