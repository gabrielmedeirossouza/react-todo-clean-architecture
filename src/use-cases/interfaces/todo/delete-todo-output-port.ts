import { IDeleteTodoResponseModel } from ".";

export interface IDeleteTodoOutputPort {
	deleteTodoResponse(responseModel: IDeleteTodoResponseModel): void
}
