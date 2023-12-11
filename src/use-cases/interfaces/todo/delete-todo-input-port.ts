import { IDeleteTodoRequestModel } from ".";

export interface IDeleteTodoInputPort {
	deleteTodoRequest(request: IDeleteTodoRequestModel): Promise<void>;
}
