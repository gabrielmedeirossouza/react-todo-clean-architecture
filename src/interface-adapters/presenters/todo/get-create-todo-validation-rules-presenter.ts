import { IGetCreateTodoValidationRulesViewModel } from "@/interface-adapters/interfaces/todo";
import { IGetCreateTodoValidationRulesOutputPort, IGetCreateTodoValidationRulesResponseModel } from "@/use-cases/interfaces/todo";

export class GetCreateTodoValidationRulesPresenter implements IGetCreateTodoValidationRulesOutputPort {
	constructor(
		private readonly _viewModel: IGetCreateTodoValidationRulesViewModel
	) {}

	public getCreateTodoValidationRulesResponse(responseModel: IGetCreateTodoValidationRulesResponseModel): void {
		this._viewModel.rules.notify(responseModel);
	}
}
