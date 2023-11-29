import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { TodoTitleTooShortError } from "../errors/todo-title-too-short-error";
import { TodoTitleTooLongError } from "../errors/todo-title-too-long-error";
import { TodoDescriptionTooShortError } from "../errors/todo-description-too-short-error";
import { TodoDescriptionTooLongError } from "../errors/todo-description-too-long-error";
import { GenericServiceError } from "@/shared/errors/generic-service-error";

export interface ICreateTodoUseCase {
	execute(title: string, description: string): Promise<Result<ITodo,
		GenericServiceError |
		TodoTitleTooShortError |
		TodoTitleTooLongError |
		TodoDescriptionTooShortError |
		TodoDescriptionTooLongError
	>>;
}
