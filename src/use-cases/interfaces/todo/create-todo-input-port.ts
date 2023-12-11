import { ICreateTodoRequestModel } from ".";

export interface ICreateTodoInputPort {
	createTodoRequest(requestModel: ICreateTodoRequestModel): Promise<void>;
}
