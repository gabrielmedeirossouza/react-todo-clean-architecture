import { IRemoveTodoResponseModel } from ".";

export interface IRemoveTodoOutputPort {
	removeTodoResponse(responseModel: IRemoveTodoResponseModel): void
}
