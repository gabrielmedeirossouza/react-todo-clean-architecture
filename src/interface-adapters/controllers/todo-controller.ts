import { ITodoUseCase } from "@/use-cases/interfaces/todo-use-case";
import { ITodoController } from "@/use-cases/interfaces/todo-controller";

export class TodoController implements ITodoController {
	constructor(
		private _createTodoUseCase: ITodoUseCase,
	) {}

	public async createTodo(title: string, description: string) {
		const newTodo = await this._createTodoUseCase.create(title, description);
		return newTodo;
	}
}
