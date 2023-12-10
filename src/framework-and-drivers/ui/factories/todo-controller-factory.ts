import { Http } from "@/framework-and-drivers/infra/http";
import { TodoController } from "@/interface-adapters/controllers/todo";
import { ITodoViewModel } from "@/interface-adapters/interfaces/todo";
import { TodoPresenter } from "@/interface-adapters/presenters/todo";
import { TodoRepository } from "@/interface-adapters/repositories/todo";
import { TodoUseCase } from "@/use-cases/todo-use-case";

export const todoControllerFactory = (updateView: (viewModel: ITodoViewModel) => void) => new TodoController(
	new TodoUseCase(
		new TodoRepository(new Http()),
		new TodoPresenter(updateView)
	)
);
