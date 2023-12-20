import { ICheckCreateTodoInputPort, ICheckCreateTodoOutputPort, ICheckDescriptionCreateTodoRequestModel, ICheckTitleCreateTodoRequestModel, ITodoValidationService } from "../interfaces/todo";

export class CheckCreateTodoUseCase implements ICheckCreateTodoInputPort {
	constructor(
		private readonly _todoValidationService: ITodoValidationService,
		private readonly _todoOutputPort: ICheckCreateTodoOutputPort
	) { }

	public checkTitleCreateTodoRequest({ title }: ICheckTitleCreateTodoRequestModel): void {
		const results = [
			this._todoValidationService.validateTitleTooShort(title),
			this._todoValidationService.validateTitleTooLong(title),
		] as const;

		const [titleTooShort, titleTooLong] = results;

		this._todoOutputPort.checkCreateTodoTitleResponse({ response: titleTooShort });
		this._todoOutputPort.checkCreateTodoTitleResponse({ response: titleTooLong });
	}

	public checkDescriptionCreateTodoRequest({ description }: ICheckDescriptionCreateTodoRequestModel): void {
		const results = [
			this._todoValidationService.validateDescriptionTooShort(description),
			this._todoValidationService.validateDescriptionTooLong(description)
		] as const;

		const [descriptionTooShort, descriptionTooLong] = results;

		this._todoOutputPort.checkCreateTodoDescriptionResponse({ response: descriptionTooShort });
		this._todoOutputPort.checkCreateTodoDescriptionResponse({ response: descriptionTooLong });
	}
}
