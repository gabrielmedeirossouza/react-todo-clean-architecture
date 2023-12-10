import { ITodo } from "@/entities/interfaces/todo";
import { IEntityModel } from "@/shared/entity-model";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { ITodoRepository } from "@/use-cases/interfaces/todo";

export class InMemoryTodoRepository implements ITodoRepository {
	private _todoList: IEntityModel<ITodo>[] = [];

	public async create(todo: ITodo): Promise<Result<string, GenericServiceError>> {
		const fakeId = String(Math.random() * 10000 + 1);
		this._todoList.push({
			id: fakeId,
			entity: todo
		});

		return Result.ok(fakeId);
	}

	public async delete(id: string): Promise<Result<string, GenericServiceError>> {
		const todoIndex = this._todoList.findIndex(todo => todo.id === id);
		if (todoIndex === -1) return Result.fail(new GenericServiceError());

		this._todoList.splice(todoIndex, 1);
		return Result.ok(id);
	}
}
