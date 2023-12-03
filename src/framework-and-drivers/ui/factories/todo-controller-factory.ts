import { Http } from "@/framework-and-drivers/infra/http";
import { TodoController } from "@/interface-adapters/controllers/todo-controller";
import { TodoRepository } from "@/interface-adapters/repositories/todo-repository";
import { TodoUseCase } from "@/use-cases/todo-use-case";

export const todoControllerFactory = () => new TodoController(
	new TodoUseCase(new TodoRepository(new Http()))
);
