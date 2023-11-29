import { ICreateTodoUseCase } from "@/use-cases/interfaces/create-todo-use-case";
import { ITodoController } from "@/use-cases/interfaces/todo-controller";
import { ITodoPresenter } from "@/use-cases/interfaces/todo-presenter";

export class TodoController implements ITodoController {
	constructor(
		private _createTodoUseCase: ICreateTodoUseCase,
		private _todoPresenter: ITodoPresenter
	) {}

	public async createTodo(title: string, description: string) {
		const newTodo = await this._createTodoUseCase.execute(title, description);
		return this._todoPresenter.present(newTodo);
	}
}
