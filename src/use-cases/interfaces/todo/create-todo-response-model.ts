import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from "../dtos";

export interface ICreateTodoResponseModel {
	response: Result<ITodo, void>;
}

export interface ICreateTodoTitleResponseModel {
	response: Result<IFieldDTO, INameTooShortDTO | INameTooLongDTO>
}

export interface ICreateTodoDescriptionResponseModel {
	response: Result<IFieldDTO, INameTooShortDTO | INameTooLongDTO>
}

export interface ICreateTodoServiceResponseModel {
	response: Result<void, IMessageDTO>
}
