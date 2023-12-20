import { ICreateTodoDescriptionResponseModel, ICreateTodoResponseModel, ICreateTodoServiceResponseModel, ICreateTodoTitleResponseModel } from ".";

export interface ICreateTodoOutputPort {
	createTodoResponse(responseModel: ICreateTodoResponseModel): void;
	createTodoTitleResponse(responseModel: ICreateTodoTitleResponseModel): void;
	createTodoDescriptionResponse(responseModel: ICreateTodoDescriptionResponseModel): void;
	createTodoServiceResponse(responseModel: ICreateTodoServiceResponseModel): void;
}
