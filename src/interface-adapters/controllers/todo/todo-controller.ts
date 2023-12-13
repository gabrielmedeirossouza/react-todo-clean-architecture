import { ITodoController } from "@/interface-adapters/interfaces/todo";
import { ICreateTodoInputPort, IRemoveTodoInputPort } from "@/use-cases/interfaces/todo";

export class TodoController implements ITodoController {
	constructor(
		private _createTodoUseCase: ICreateTodoInputPort,
		private _removeTodoInputPort: IRemoveTodoInputPort
	) {}

	public async createTodo(title: string, description: string): Promise<void> {
		await this._createTodoUseCase.createTodoRequest({ title, description });
	}

	public async removeTodo(id: string): Promise<void> {
		await this._removeTodoInputPort.removeTodoRequest({ id });
	}
}
