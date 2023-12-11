import { Result } from "@/shared/result";
import { IDeleteTodoInputPort, IDeleteTodoOutputPort, IDeleteTodoRequestModel, ITodoRepository } from "../interfaces/todo";

export class DeleteTodoUseCase implements IDeleteTodoInputPort {
	constructor(
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: IDeleteTodoOutputPort
	) { }

	public async deleteTodoRequest({ id }: IDeleteTodoRequestModel): Promise<void> {
		const deletedTodo = await this._todoRepository.delete(id);
		if (!deletedTodo.ok) return this._todoOutputPort.deleteTodoResponse({ response: deletedTodo });

		this._todoOutputPort.deleteTodoResponse({ response: Result.ok(id) });
	}
}
