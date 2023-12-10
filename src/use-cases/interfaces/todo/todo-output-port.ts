import { ICreateTodoResponseModel } from "./create-todo-response-model";

export interface ITodoOutputPort {
	createTodoResponse(responseModel: ICreateTodoResponseModel): void
}
