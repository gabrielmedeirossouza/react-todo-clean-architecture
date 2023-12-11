import { Result } from "@/shared/result";
import { ICreateTodoRequestModel, ICreateTodoInputPort, ICreateTodoOutputPort, ITodoRepository, ITodoValidationService } from "../interfaces/todo";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "../errors/todo";
import { Todo } from "@/entities/todo";

export class CreateTodoUseCase implements ICreateTodoInputPort {
	private readonly _TITLE_MIN_LENGTH = 3;
	private readonly _TITLE_MAX_LENGTH = 20;
	private readonly _DESCRIPTION_MIN_LENGTH = 10;
	private readonly _DESCRIPTION_MAX_LENGTH = 50;

	constructor(
		private _todoValidationService: ITodoValidationService,
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: ICreateTodoOutputPort
	) { }

	public async createTodoRequest({ title, description }: ICreateTodoRequestModel): Promise<void> {
		if (!this._todoValidationService.validateTitleTooShort(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooShortError(title, this._TITLE_MIN_LENGTH)) });
		if (!this._todoValidationService.validateTitleTooLong(title))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoTitleTooLongError(title, this._TITLE_MAX_LENGTH)) });
		if (!this._todoValidationService.validateDescriptionTooShort(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooShortError(description, this._DESCRIPTION_MIN_LENGTH)) });
		if (!this._todoValidationService.validateDescriptionTooLong(description))
			return this._todoOutputPort.createTodoResponse({ response: Result.fail(new TodoDescriptionTooLongError(description, this._DESCRIPTION_MAX_LENGTH)) });

		const todo = new Todo(title, description, false);
		const createdTodo = await this._todoRepository.create(todo);
		if (!createdTodo.ok) return this._todoOutputPort.createTodoResponse({ response: createdTodo });

		this._todoOutputPort.createTodoResponse({response: Result.ok({ id: createdTodo.value, entity: todo })});
	}
}
