import { Result } from "@/shared/result";
import { INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../dtos";

export interface ICheckTitleCreateTodoResponseModel {
	response: Result<INameTooShortSuccessDTO | INameTooLongSuccessDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICheckDescriptionCreateTodoResponseModel {
	response: Result<INameTooShortSuccessDTO | INameTooLongSuccessDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}
