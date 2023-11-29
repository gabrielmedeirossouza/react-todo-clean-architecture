import { Http } from "@/framework-and-drivers/infra/http";
import { TodoController } from "@/interface-adapters/controllers/todo-controller";
import { TodoPresenter } from "@/interface-adapters/presenters/todo-presenter";
import { TodoRepository } from "@/interface-adapters/repositories/todo-repository";
import { CreateTodoUseCase } from "@/use-cases/create-todo-use-case";

export const todoControllerFactory = () => new TodoController(
	new CreateTodoUseCase(new TodoRepository(new Http())),
	new TodoPresenter()
);
