import { ICreateTodoRequestModel } from "./create-todo-request-model";

export interface ITodoInputPort {
	createTodoRequest(requestModel: ICreateTodoRequestModel): Promise<void>;
}
