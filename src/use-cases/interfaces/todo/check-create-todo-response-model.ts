import { Result } from "@/shared/result";
import { INameTooLongErrorDTO, INameTooShortErrorDTO } from "../dtos";

export interface ICheckTitleCreateTodoResponseModel {
	response: Result<void, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICheckDescriptionCreateTodoResponseModel {
	response: Result<void, INameTooShortErrorDTO | INameTooLongErrorDTO>
}
