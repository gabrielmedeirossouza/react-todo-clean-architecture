import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { Result } from "@/shared/result";

export interface IDeleteTodoViewModel {
	viewModel: Result<string, GenericServiceMessageError | UnknownMessageError>;
}
