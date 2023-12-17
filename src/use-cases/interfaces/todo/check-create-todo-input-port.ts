import { ICheckDescriptionCreateTodoRequestModel, ICheckTitleCreateTodoRequestModel } from ".";

export interface ICheckCreateTodoInputPort {
	checkTitleCreateTodoRequest(requestModel: ICheckTitleCreateTodoRequestModel): void;
	checkDescriptionCreateTodoRequest(requestModel: ICheckDescriptionCreateTodoRequestModel): void;
}
