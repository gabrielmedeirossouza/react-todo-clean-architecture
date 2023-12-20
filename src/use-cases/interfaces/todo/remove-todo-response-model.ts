import { Result } from "@/shared/result";
import { IMessageDTO } from "../dtos";

export interface IRemoveTodoResponseModel {
	response: Result<string, IMessageDTO>;
}
