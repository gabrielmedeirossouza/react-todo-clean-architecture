import { Result } from "@/shared/result";
import { GenericServiceMessageError, UnknownMessageError } from "../../errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "../../errors/todo";
import { ITodo } from "@/entities/interfaces/todo";

type TTodoViewModelFail =
	TodoTitleFieldValidationError |
	TodoDescriptionFieldValidationError |
	GenericServiceMessageError |
	UnknownMessageError;

export interface ICreateTodoViewModel {
	viewModel: Result<ITodo, TTodoViewModelFail>;
}
