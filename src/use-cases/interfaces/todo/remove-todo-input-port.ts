import { IRemoveTodoRequestModel } from ".";

export interface IRemoveTodoInputPort {
	removeTodoRequest(request: IRemoveTodoRequestModel): Promise<void>;
}
