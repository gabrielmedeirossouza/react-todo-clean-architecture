import { TodoController } from "@/interface-adapters/controllers/todo";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { IDeleteTodoViewModel } from "@/interface-adapters/interfaces/todo/delete-todo-view-model";
import { TodoPresenter } from "@/interface-adapters/presenters/todo";
import { InMemoryTodoRepository } from "@/interface-adapters/repositories/todo";
import { TodoUseCase } from "@/use-cases/todo-use-case";

// const todoRepository = new TodoRepository(new Http());
const todoRepository = new InMemoryTodoRepository();


export const todoFactory = (createTodoUpdateView: (viewModel: ICreateTodoViewModel) => void, deleteTodoUpdateView: (viewModel: IDeleteTodoViewModel) => void) => new TodoController(
	new TodoUseCase(
		todoRepository,
		new TodoPresenter({ createTodoUpdateView, deleteTodoUpdateView })
	)
);
