import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceDTO } from "@/use-cases/dtos";
import { IMessageDTO } from "@/use-cases/interfaces/dtos";
import { ITodoRepository } from "@/use-cases/interfaces/todo";

export class InMemoryTodoRepository implements ITodoRepository {
	private _todoList: ITodo[] = [];

	public async create(title: string, description: string, isCompleted: boolean): Promise<Result<string, IMessageDTO>> {
		const fakeId = crypto.randomUUID();
		this._todoList.push({
			id: fakeId,
			title,
			description,
			isCompleted
		});

		return Result.ok(fakeId);
	}

	public async remove(id: string): Promise<Result<string, IMessageDTO>> {
		const todoIndex = this._todoList.findIndex(todo => todo.id === id);
		if (todoIndex === -1) return Result.fail(new GenericServiceDTO());

		this._todoList.splice(todoIndex, 1);
		return Result.ok(id);
	}
}
