import { ICreateTodoRequestModel } from "./create-todo-request-model";
import { IDeleteTodoRequestModel } from "./delete-todo-request-model";

export interface ITodoInputPort {
	createTodoRequest(requestModel: ICreateTodoRequestModel): Promise<void>;
	deleteTodoRequest(requestModel: IDeleteTodoRequestModel): Promise<void>;
}
