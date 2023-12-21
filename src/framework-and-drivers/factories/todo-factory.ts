import { TodoController } from "@/interface-adapters/controllers/todo";
import { ICheckCreateTodoViewModel, ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { IRemoveTodoViewModel } from "@/interface-adapters/interfaces/todo/remove-todo-view-model";
import { CreateTodoPresenter } from "@/interface-adapters/presenters/todo";
import { RemoveTodoPresenter } from "@/interface-adapters/presenters/todo/remove-todo-presenter";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { CreateTodoUseCase } from "@/use-cases/todo-use-case";
import { RemoveTodoUseCase } from "@/use-cases/todo-use-case/remove-todo-use-case";
import { TodoValidationService } from "@/use-cases/todo-use-case/todo-validation-service";
import { observableFactory } from "./observable-factory";
import { CheckCreateTodoPresenter } from "@/interface-adapters/presenters/todo/check-create-todo-presenter";
import { CheckCreateTodoUseCase } from "@/use-cases/todo-use-case/check-create-todo-use-case";

export function todoFactory() {
	const todoRepository = new InMemoryTodoRepository();
	const todoValidationService = new TodoValidationService();

	const checkCreateTodoPresenterObservable = {
		checkCreateTodoField: observableFactory()
	} satisfies ICheckCreateTodoViewModel;

	const createTodoPresenterObservable = {
		createTodo: observableFactory(),
		createTodoField: observableFactory(),
		createTodoMessage: observableFactory()
	} satisfies ICreateTodoViewModel;

	const removeTodoPresenterObservable = {
		removeTodo: observableFactory(),
	} satisfies IRemoveTodoViewModel;

	const checkCreateTodoPresenter = new CheckCreateTodoPresenter(checkCreateTodoPresenterObservable);
	const checkCreateTodoUseCase = new CheckCreateTodoUseCase(todoValidationService, checkCreateTodoPresenter);

	const createTodoPresenter = new CreateTodoPresenter(createTodoPresenterObservable);
	const createTodoUseCase = new CreateTodoUseCase(todoValidationService, todoRepository, createTodoPresenter);

	const removeTodoPresenter = new RemoveTodoPresenter(removeTodoPresenterObservable);
	const removeTodoUseCase = new RemoveTodoUseCase(todoRepository, removeTodoPresenter);

	const todoController = new TodoController({
		checkCreateTodoUseCase,
		createTodoUseCase,
		removeTodoUseCase
	});

	return {
		todoController,
		checkCreateTodoPresenterObservable,
		createTodoPresenterObservable,
		removeTodoPresenterObservable
	};
}
