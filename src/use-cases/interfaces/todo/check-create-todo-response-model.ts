import { Result } from "@/shared/result";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";

export interface ICheckTitleCreateTodoResponseModel {
	response: Result<void, TodoTitleTooShortError | TodoTitleTooLongError>
}

export interface ICheckDescriptionCreateTodoResponseModel {
	response: Result<void, TodoDescriptionTooShortError | TodoDescriptionTooLongError>
}
