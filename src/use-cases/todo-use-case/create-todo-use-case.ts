import { Result } from "@/shared/result";
import { ICreateTodoRequestModel, ICreateTodoInputPort, ICreateTodoOutputPort, ITodoRepository, ITodoValidationService } from "../interfaces/todo";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "../errors/todo";
import { Todo } from "@/entities/todo";

export class CreateTodoUseCase implements ICreateTodoInputPort {
	constructor(
		private _todoValidationService: ITodoValidationService,
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: ICreateTodoOutputPort
	) { }

	public async createTodoRequest({ title, description }: ICreateTodoRequestModel): Promise<void> {
		if (!this._todoValidationService.validateTitleTooShort(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooShortError(title, this._todoValidationService.TITLE_MIN_LENGTH)) });
		if (!this._todoValidationService.validateTitleTooLong(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooLongError(title, this._todoValidationService.TITLE_MAX_LENGTH)) });
		if (!this._todoValidationService.validateDescriptionTooShort(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooShortError(description, this._todoValidationService.DESCRIPTION_MIN_LENGTH)) });
		if (!this._todoValidationService.validateDescriptionTooLong(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooLongError(description, this._todoValidationService.DESCRIPTION_MAX_LENGTH)) });

		const createdTodo = await this._todoRepository.create(title, description, false);
		if (!createdTodo.ok) return this._todoOutputPort.createTodoResponse({ response: createdTodo });
		const todo = new Todo(createdTodo.value, title, description, false);

		this._todoOutputPort.createTodoResponse({ response: Result.ok(todo) });
	}
}
