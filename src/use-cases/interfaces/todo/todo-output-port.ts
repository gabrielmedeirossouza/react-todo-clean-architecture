import { ICreateTodoResponseModel } from "./create-todo-response-model";
import { IDeleteTodoResponseModel } from "./delete-todo-response-model";

export interface ITodoOutputPort {
	createTodoResponse(responseModel: ICreateTodoResponseModel): void
	deleteTodoResponse(responseModel: IDeleteTodoResponseModel): void
}
