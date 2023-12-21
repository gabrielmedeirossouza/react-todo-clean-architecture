import { Result } from "@/shared/result";
import { ICheckCreateTodoInputPort, ICheckCreateTodoOutputPort, ICheckDescriptionCreateTodoRequestModel, ICheckTitleCreateTodoRequestModel, ITodoValidationService } from "../interfaces/todo";

export class CheckCreateTodoUseCase implements ICheckCreateTodoInputPort {
	constructor(
		private readonly _todoValidationService: ITodoValidationService,
		private readonly _todoOutputPort: ICheckCreateTodoOutputPort
	) { }

	public checkTitleCreateTodoRequest({ title }: ICheckTitleCreateTodoRequestModel): void {
		const resultTooShort = this._todoValidationService.validateTitleTooShort(title);
		const resultTooLong = this._todoValidationService.validateTitleTooLong(title);
		if (!resultTooShort.ok) return this._todoOutputPort.checkCreateTodoTitleResponse({ response: resultTooShort });
		if (!resultTooLong.ok) return this._todoOutputPort.checkCreateTodoTitleResponse({ response: resultTooLong });

		this._todoOutputPort.checkCreateTodoTitleResponse({ response: Result.ok(undefined)});
	}

	public checkDescriptionCreateTodoRequest({ description }: ICheckDescriptionCreateTodoRequestModel): void {
		const resultTooShort = this._todoValidationService.validateDescriptionTooShort(description);
		const resultTooLong = this._todoValidationService.validateDescriptionTooLong(description);
		if (!resultTooShort.ok) return this._todoOutputPort.checkCreateTodoDescriptionResponse({ response: resultTooShort });
		if (!resultTooLong.ok) return this._todoOutputPort.checkCreateTodoDescriptionResponse({ response: resultTooLong });

		this._todoOutputPort.checkCreateTodoDescriptionResponse({ response: Result.ok(undefined)});
	}
}
