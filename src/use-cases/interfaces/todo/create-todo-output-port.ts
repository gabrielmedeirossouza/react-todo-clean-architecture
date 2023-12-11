import { ICreateTodoResponseModel } from ".";

export interface ICreateTodoOutputPort {
	createTodoResponse(responseModel: ICreateTodoResponseModel): void
}
