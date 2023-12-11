import { ITodoController } from "@/interface-adapters/interfaces/todo";
import { ICreateTodoInputPort, IDeleteTodoInputPort } from "@/use-cases/interfaces/todo";

export class TodoController implements ITodoController {
	constructor(
		private _createTodoUseCase: ICreateTodoInputPort,
		private _deleteTodoInputPort: IDeleteTodoInputPort
	) {}

	public async createTodo(title: string, description: string): Promise<void> {
		await this._createTodoUseCase.createTodoRequest({ title, description });
	}

	public async deleteTodoById(id: string): Promise<void> {
		await this._deleteTodoInputPort.deleteTodoRequest({ id });
	}
}
