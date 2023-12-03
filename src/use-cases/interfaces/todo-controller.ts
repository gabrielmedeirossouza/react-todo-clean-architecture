import { Result } from "@/shared/result";
import { ITodoOutputModel } from "./todo-output-model";
import { GenericServiceError } from "@/shared/errors/generic-service-error";
import { TodoTitleTooShortError } from "../errors/todo-title-too-short-error";
import { TodoTitleTooLongError } from "../errors/todo-title-too-long-error";
import { TodoDescriptionTooShortError } from "../errors/todo-description-too-short-error";
import { TodoDescriptionTooLongError } from "../errors/todo-description-too-long-error";

export interface ITodoController {
	createTodo(title: string, description: string): Promise<Result<ITodoOutputModel,
		GenericServiceError |
		TodoTitleTooShortError |
		TodoTitleTooLongError |
		TodoDescriptionTooShortError |
		TodoDescriptionTooLongError
	>>;
}
