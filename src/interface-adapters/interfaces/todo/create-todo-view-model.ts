import { Result } from "@/shared/result";
import { GenericServiceMessageError, UnknownMessageError } from "../../errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "../../errors/todo";

type TViewModelOk = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly isCompleted: boolean;
}

type TViewModelFail =
	TodoTitleFieldValidationError |
	TodoDescriptionFieldValidationError |
	GenericServiceMessageError |
	UnknownMessageError;

export interface ICreateTodoViewModel {
	viewModel: Result<TViewModelOk, TViewModelFail>;
}
