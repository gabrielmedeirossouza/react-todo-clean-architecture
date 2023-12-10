import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";


type TResponseOk = {
	id: string;
	entity: ITodo;
}

type TResponseFail =
	TodoTitleTooShortError |
	TodoTitleTooLongError |
	TodoDescriptionTooShortError |
	TodoDescriptionTooLongError |
	GenericServiceError;

export interface ICreateTodoResponseModel {
	response: Result<TResponseOk, TResponseFail>;
}
