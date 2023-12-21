import { Result } from "@/shared/result";
import { INameTooLongDTO, INameTooShortDTO } from "../dtos";

export interface ICheckTitleCreateTodoResponseModel {
	response: Result<void, INameTooShortDTO | INameTooLongDTO>
}

export interface ICheckDescriptionCreateTodoResponseModel {
	response: Result<void, INameTooShortDTO | INameTooLongDTO>
}
