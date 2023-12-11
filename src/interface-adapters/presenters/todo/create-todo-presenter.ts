import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "@/interface-adapters/errors/todo";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICreateTodoResponseModel, ICreateTodoOutputPort } from "@/use-cases/interfaces/todo";

export class CreateTodoPresenter implements ICreateTodoOutputPort {
	constructor(
		private _updateView: (viewModel: ICreateTodoViewModel) => void
	) {}

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._updateView({
			viewModel: Result.ok(response.value)
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
