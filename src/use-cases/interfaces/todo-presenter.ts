import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/shared/errors/generic-service-error";
import { TodoTitleTooShortError } from "../errors/todo-title-too-short-error";
import { TodoTitleTooLongError } from "../errors/todo-title-too-long-error";
import { TodoDescriptionTooShortError } from "../errors/todo-description-too-short-error";
import { TodoDescriptionTooLongError } from "../errors/todo-description-too-long-error";
import { ITodoOutputDTO } from "./todo-output-dto";

export interface ITodoPresenter {
	present(todo: Result<ITodo, TodoTitleTooShortError | TodoTitleTooLongError | TodoDescriptionTooShortError | TodoDescriptionTooLongError | GenericServiceError>): Result<ITodoOutputDTO, string>;
}
