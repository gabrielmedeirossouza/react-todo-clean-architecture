import { ICheckDescriptionCreateTodoResponseModel, ICheckTitleCreateTodoResponseModel } from ".";

export interface ICheckCreateTodoOutputPort {
	checkTitleCreateTodoResponse(responseModel: ICheckTitleCreateTodoResponseModel): void;
	checkDescriptionCreateTodoResponse(responseModel: ICheckDescriptionCreateTodoResponseModel): void;
}
