import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "@/interface-adapters/errors/todo";
import { ITodoViewModel } from "@/interface-adapters/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICreateTodoResponseModel, ITodoOutputPort } from "@/use-cases/interfaces/todo";

export class TodoPresenter implements ITodoOutputPort {
	constructor(
		private _updateView: (viewModel: ITodoViewModel) => void
	) { }

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._updateView({
			viewModel: Result.ok({
				id: response.value.id,
				...response.value.entity
			})
		});


		if (response.error instanceof TodoTitleTooShortError)
			return this._updateView({
				viewModel: Result.fail(new TodoTitleFieldValidationError(`O Título precisa ter pelo menos ${response.error.minLength} caracteres.`))
			});

		if (response.error instanceof TodoTitleTooLongError)
			return this._updateView({
				viewModel: Result.fail(new TodoTitleFieldValidationError(`O Título precisa ter no máximo ${response.error.maxLength} caracteres.`))
			});

		if (response.error instanceof TodoDescriptionTooShortError)
			return this._updateView({
				viewModel: Result.fail(new TodoDescriptionFieldValidationError(`A Descrição precisa ter pelo menos ${response.error.minLength} caracteres.`))
			});

		if (response.error instanceof TodoDescriptionTooLongError)
			return this._updateView({
				viewModel: Result.fail(new TodoDescriptionFieldValidationError(`A Descrição precisa ter no máximo ${response.error.maxLength} caracteres.`))
			});

		if (response.error instanceof GenericServiceError)
			return this._updateView({
				viewModel: Result.fail(new GenericServiceMessageError())
			});

		this._updateView({ viewModel: Result.fail(new UnknownMessageError()) });
	}
}
