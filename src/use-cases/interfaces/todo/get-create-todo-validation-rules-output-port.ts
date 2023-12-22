import { IGetCreateTodoValidationRulesResponseModel } from "./get-create-todo-validation-rules-response-model";

export interface IGetCreateTodoValidationRulesOutputPort {
	getCreateTodoValidationRulesResponse(responseModel: IGetCreateTodoValidationRulesResponseModel): void;
}
