import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { ITodoRepository } from "@/use-cases/interfaces/todo";

export class InMemoryTodoRepository implements ITodoRepository {
	private _todoList: ITodo[] = [];

	public async create(todo: ITodo): Promise<Result<string, GenericServiceError>> {
		this._todoList.push(todo);
		return Result.ok(String(Math.random() * 10000 + 1));
	}
}
