import { ITodo } from "@/entities/interfaces/todo";
import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "@/interface-adapters/errors/todo";

export interface ICreateTodoPresenterOutputPort {
	createSuccessResponse(response: ITodo): void;
	createFailFieldResponse(response:	TodoTitleFieldValidationError | TodoDescriptionFieldValidationError): void;
	createFailMessageResponse(response: GenericServiceMessageError | UnknownMessageError): void;
}
