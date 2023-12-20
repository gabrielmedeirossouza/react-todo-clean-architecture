import { ICheckDescriptionCreateTodoResponseModel, ICheckTitleCreateTodoResponseModel } from ".";

export interface ICheckCreateTodoOutputPort {
	checkCreateTodoTitleResponse(responseModel: ICheckTitleCreateTodoResponseModel): void;
	checkCreateTodoDescriptionResponse(responseModel: ICheckDescriptionCreateTodoResponseModel): void;
}
