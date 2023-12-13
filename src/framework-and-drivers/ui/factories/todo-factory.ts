import { TodoController } from "@/interface-adapters/controllers/todo";
import { ICreateTodoPresenterOutputPort } from "@/interface-adapters/interfaces/todo/create-todo-presenter-output-port";
import { CreateTodoPresenter, DeleteTodoPresenter } from "@/interface-adapters/presenters/todo";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { CreateTodoUseCase, DeleteTodoUseCase } from "@/use-cases/todo-use-case";
import { TodoValidationService } from "@/use-cases/todo-use-case/todo-validation-service";

type TPresenterOutputPort = ICreateTodoPresenterOutputPort;

interface ITodoFactory extends TPresenterOutputPort {}

export function todoFactory({ createSuccessResponse, createFailFieldResponse, createFailMessageResponse }: ITodoFactory) {
	const todoRepository = new InMemoryTodoRepository();
	const todoValidationService = new TodoValidationService();

	const createTodoPresenter = new CreateTodoPresenter({ createSuccessResponse, createFailFieldResponse, createFailMessageResponse });
	const createTodoUseCase = new CreateTodoUseCase(todoValidationService, todoRepository, createTodoPresenter);

	const deleteTodoPresenter = new DeleteTodoPresenter(() => {});
	const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository, deleteTodoPresenter);

	const todoController = new TodoController(createTodoUseCase, deleteTodoUseCase);
	console.log("todoFactory created");

	return todoController;
}
