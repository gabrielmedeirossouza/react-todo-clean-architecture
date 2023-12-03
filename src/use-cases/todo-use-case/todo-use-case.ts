import { Result } from "@/shared/result";
import { Todo } from "@/entities/todo";
import { ITodoUseCase } from "../interfaces/todo-use-case";
import { TodoTitleTooShortError } from "../errors/todo-title-too-short-error";
import { TodoTitleTooLongError } from "../errors/todo-title-too-long-error";
import { TodoDescriptionTooShortError } from "../errors/todo-description-too-short-error";
import { TodoDescriptionTooLongError } from "../errors/todo-description-too-long-error";
import { ITodoRepository } from "../interfaces/todo-repository";

export class TodoUseCase implements ITodoUseCase {
	private readonly _TITLE_MIN_LENGTH = 3;
	private readonly _TITLE_MAX_LENGTH = 20;
	private readonly _DESCRIPTION_MIN_LENGTH = 10;
	private readonly _DESCRIPTION_MAX_LENGTH = 50;

	constructor(
		private _todoRepository: ITodoRepository
	) {}

	public async create(title: string, description: string) {
		if (!this._validateTitleTooShort(title)) return Result.fail(new TodoTitleTooShortError(title, this._TITLE_MIN_LENGTH));
		if (!this._validateTitleTooLong(title)) return Result.fail(new TodoTitleTooLongError(title, this._TITLE_MAX_LENGTH));
		if (!this._validateDescriptionTooShort(description)) return Result.fail(new TodoDescriptionTooShortError(description, this._DESCRIPTION_MIN_LENGTH));
		if (!this._validateDescriptionTooLong(description)) return Result.fail(new TodoDescriptionTooLongError(description, this._DESCRIPTION_MAX_LENGTH));

		const todo = new Todo(title, description, false);
		const createdTodo = await this._todoRepository.create(todo);
		if (!createdTodo.ok) return createdTodo;

		return Result.ok({ id: createdTodo.value, entity: todo });
	}

	private _validateTitleTooShort(title: string): boolean {
		return title.length >= this._TITLE_MIN_LENGTH;
	}

	private _validateTitleTooLong(title: string): boolean {
		return title.length <= this._TITLE_MAX_LENGTH;
	}

	private _validateDescriptionTooShort(description: string): boolean {
		return description.length >= this._DESCRIPTION_MIN_LENGTH;
	}

	private _validateDescriptionTooLong(description: string): boolean {
		return description.length <= this._DESCRIPTION_MAX_LENGTH;
	}
}
