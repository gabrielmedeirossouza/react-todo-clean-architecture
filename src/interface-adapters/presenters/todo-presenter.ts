import { ITodoPresenter } from "@/use-cases/interfaces/todo-presenter";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/shared/errors/generic-service-error";
import { TodoDescriptionTooLongError } from "@/use-cases/errors/todo-description-too-long-error";
import { TodoDescriptionTooShortError } from "@/use-cases/errors/todo-description-too-short-error";
import { TodoTitleTooLongError } from "@/use-cases/errors/todo-title-too-long-error";
import { TodoTitleTooShortError } from "@/use-cases/errors/todo-title-too-short-error";
import { ITodoOutputModel } from "@/use-cases/interfaces/todo-output-model";

export class TodoPresenter implements ITodoPresenter {
	public present(todo: Result<ITodoOutputModel, TodoTitleTooShortError | TodoTitleTooLongError | TodoDescriptionTooShortError | TodoDescriptionTooLongError | GenericServiceError>) {
		if (todo.ok) return Result.ok({
			id: todo.value.id,
			...todo.value.entity
		});

		if (todo.error instanceof TodoTitleTooShortError) return Result.fail(`O Título precisa ter pelo menos ${todo.error.minLength} caracteres.`);
		if (todo.error instanceof TodoTitleTooLongError) return Result.fail(`O Título precisa ter no máximo ${todo.error.maxLength} caracteres.`);
		if (todo.error instanceof TodoDescriptionTooShortError) return Result.fail(`A Descrição precisa ter pelo menos ${todo.error.minLength} caracteres.`);
		if (todo.error instanceof TodoDescriptionTooLongError) return Result.fail(`A Descrição precisa ter no máximo ${todo.error.maxLength} caracteres.`);
		if (todo.error instanceof GenericServiceError) return Result.fail("Erro ao criar o Todo. Tente novamente mais tarde.");

		return Result.fail("Erro desconhecido.");
	}
}
