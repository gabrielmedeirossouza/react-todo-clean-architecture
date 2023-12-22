import { IGetCreateTodoValidationRulesInputPort, IGetCreateTodoValidationRulesOutputPort, ITodoValidationService } from "../interfaces/todo";

interface IGetCreateTodoValidationRulesUseCaseDependencies {
	todoValidationService: ITodoValidationService;
	todoOutputPort: IGetCreateTodoValidationRulesOutputPort;
}

export class GetCreateTodoValidationRulesUseCase implements IGetCreateTodoValidationRulesInputPort {
	private readonly _todoValidationService: ITodoValidationService;
	private readonly _todoOutputPort: IGetCreateTodoValidationRulesOutputPort;

	constructor({
		todoValidationService,
		todoOutputPort
	}: IGetCreateTodoValidationRulesUseCaseDependencies) {
		this._todoValidationService = todoValidationService;
		this._todoOutputPort = todoOutputPort;
	}

	public getCreateTodoValidationRules(): void {
		this._todoOutputPort.getCreateTodoValidationRulesResponse({
			titleMinLength: this._todoValidationService.TITLE_MIN_LENGTH,
			titleMaxLength: this._todoValidationService.TITLE_MAX_LENGTH,
			descriptionMinLength: this._todoValidationService.DESCRIPTION_MIN_LENGTH,
			descriptionMaxLength: this._todoValidationService.DESCRIPTION_MAX_LENGTH,
		});
	}
}
