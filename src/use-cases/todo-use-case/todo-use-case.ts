import { Result } from "@/shared/result";
import { ICreateTodoRequestModel, IDeleteTodoRequestModel, ITodoInputPort, ITodoOutputPort, ITodoRepository } from "../interfaces/todo";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "../errors/todo";
import { Todo } from "@/entities/todo";

export class TodoUseCase implements ITodoInputPort {
	private readonly _TITLE_MIN_LENGTH = 3;
	private readonly _TITLE_MAX_LENGTH = 20;
	private readonly _DESCRIPTION_MIN_LENGTH = 10;
	private readonly _DESCRIPTION_MAX_LENGTH = 50;

	constructor(
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: ITodoOutputPort
	) { }

	public async createTodoRequest({ title, description }: ICreateTodoRequestModel): Promise<void> {
		if (!this._validateTitleTooShort(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooShortError(title, this._TITLE_MIN_LENGTH)) });
		if (!this._validateTitleTooLong(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooLongError(title, this._TITLE_MAX_LENGTH)) });
		if (!this._validateDescriptionTooShort(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooShortError(description, this._DESCRIPTION_MIN_LENGTH)) });
		if (!this._validateDescriptionTooLong(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooLongError(description, this._DESCRIPTION_MAX_LENGTH)) });

		const todo = new Todo(title, description, false);
		const createdTodo = await this._todoRepository.create(todo);
		if (!createdTodo.ok) return this._todoOutputPort.createTodoResponse({ response: createdTodo });

		this._todoOutputPort.createTodoResponse({response: Result.ok({ id: createdTodo.value, entity: todo })});
	}

	public async deleteTodoRequest({ id }: IDeleteTodoRequestModel): Promise<void> {
		const deletedTodo = await this._todoRepository.delete(id);
		if (!deletedTodo.ok) return this._todoOutputPort.deleteTodoResponse({ response: deletedTodo });

		this._todoOutputPort.deleteTodoResponse({ response: Result.ok(id) });
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
