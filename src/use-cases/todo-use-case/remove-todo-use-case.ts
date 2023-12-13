import { Result } from "@/shared/result";
import { IRemoveTodoInputPort, IRemoveTodoOutputPort, IRemoveTodoRequestModel, ITodoRepository } from "../interfaces/todo";

export class RemoveTodoUseCase implements IRemoveTodoInputPort {
	constructor(
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: IRemoveTodoOutputPort
	) { }

	public async removeTodoRequest({ id }: IRemoveTodoRequestModel): Promise<void> {
		const removedTodo = await this._todoRepository.remove(id);
		if (!removedTodo.ok) return this._todoOutputPort.removeTodoResponse({ response: removedTodo });

		this._todoOutputPort.removeTodoResponse({ response: Result.ok(id) });
	}
}
