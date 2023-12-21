import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooShortErrorDTO } from "../dtos";

export interface ICreateTodoResponseModel {
	response: Result<ITodo, void>;
}

export interface ICreateTodoTitleResponseModel {
	response: Result<IFieldDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICreateTodoDescriptionResponseModel {
	response: Result<IFieldDTO, INameTooShortErrorDTO | INameTooLongErrorDTO>
}

export interface ICreateTodoServiceResponseModel {
	response: Result<void, IMessageDTO>
}
