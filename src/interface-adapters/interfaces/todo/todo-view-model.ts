import { Result } from "@/shared/result";
import { GenericServiceMessageError, UnknownMessageError } from "../../errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "../../errors/todo";

type TTodoViewModelOk = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly isCompleted: boolean;
}

type TTodoViewModelFail =
	TodoTitleFieldValidationError |
	TodoDescriptionFieldValidationError |
	GenericServiceMessageError |
	UnknownMessageError;

export interface ITodoViewModel {
	viewModel: Result<TTodoViewModelOk, TTodoViewModelFail>;
}
