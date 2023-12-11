import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { ITodoRepository } from "@/use-cases/interfaces/todo";

export class InMemoryTodoRepository implements ITodoRepository {
	private _todoList: ITodo[] = [];

	public async create(title: string, description: string, isCompleted: boolean): Promise<Result<string, GenericServiceError>> {
		const fakeId = crypto.randomUUID();
		this._todoList.push({
			id: fakeId,
			title,
			description,
			isCompleted
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
