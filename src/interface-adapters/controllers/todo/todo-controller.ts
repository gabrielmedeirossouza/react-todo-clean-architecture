import { ITodoController } from "@/interface-adapters/interfaces/todo";
import { ITodoInputPort } from "@/use-cases/interfaces/todo";

export class TodoController implements ITodoController {
	constructor(
		private _todoUseCase: ITodoInputPort,
	) {}

	public async createTodo(title: string, description: string): Promise<void> {
		await this._todoUseCase.createTodoRequest({ title, description });
	}
}
