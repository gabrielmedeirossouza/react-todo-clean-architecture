import { Result } from "@/shared/result";
import { ICheckCreateTodoInputPort, ICheckCreateTodoOutputPort, ICheckDescriptionCreateTodoRequestModel, ICheckTitleCreateTodoRequestModel, ITodoValidationService } from "../interfaces/todo";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "../errors/todo";

export class CheckCreateTodoUseCase implements ICheckCreateTodoInputPort {
	constructor(
		private readonly _todoValidationService: ITodoValidationService,
		private readonly _todoOutputPort: ICheckCreateTodoOutputPort
	) { }

	public checkTitleCreateTodoRequest({ title }: ICheckTitleCreateTodoRequestModel): void {
		if (!this._todoValidationService.validateTitleTooShort(title))
			return this._todoOutputPort.checkTitleCreateTodoResponse({ response: Result.fail(new TodoTitleTooShortError(title, this._todoValidationService.TITLE_MIN_LENGTH)) });
		if (!this._todoValidationService.validateTitleTooLong(title))
			return this._todoOutputPort.checkTitleCreateTodoResponse({ response: Result.fail(new TodoTitleTooLongError(title, this._todoValidationService.TITLE_MAX_LENGTH)) });

		this._todoOutputPort.checkTitleCreateTodoResponse({ response: Result.ok(undefined) });
	}

	public checkDescriptionCreateTodoRequest({ description }: ICheckDescriptionCreateTodoRequestModel): void {
		if (!this._todoValidationService.validateDescriptionTooShort(description))
			return this._todoOutputPort.checkDescriptionCreateTodoResponse({ response: Result.fail(new TodoDescriptionTooShortError(description, this._todoValidationService.DESCRIPTION_MIN_LENGTH)) });

		if (!this._todoValidationService.validateDescriptionTooLong(description))
			return this._todoOutputPort.checkDescriptionCreateTodoResponse({ response: Result.fail(new TodoDescriptionTooLongError(description, this._todoValidationService.DESCRIPTION_MAX_LENGTH)) });

		this._todoOutputPort.checkDescriptionCreateTodoResponse({ response: Result.ok(undefined) });
	}
}
