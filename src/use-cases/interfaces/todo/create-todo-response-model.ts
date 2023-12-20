import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../dtos";

export interface ICreateTodoResponseModel {
	response: Result<ITodo, void>;
}

export interface ICreateTodoTitleResponseModel {
	response: Result<INameTooShortSuccessDTO | INameTooLongSuccessDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICreateTodoDescriptionResponseModel {
	response: Result<INameTooShortSuccessDTO | INameTooLongSuccessDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICreateTodoServiceResponseModel {
	response: Result<void, IMessageDTO>
}
