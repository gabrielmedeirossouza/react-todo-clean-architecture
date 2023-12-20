import { PresentGenericServiceMessageErrorDTO, PresentNameTooLongErrorDTO, PresentNameTooShortError, PresentUnknownMessageErrorDTO } from "@/interface-adapters/dtos";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICreateTodoResponseModel, ICreateTodoOutputPort } from "@/use-cases/interfaces/todo";

export class CreateTodoPresenter implements ICreateTodoOutputPort {
	constructor(
		private _viewModel: ICreateTodoViewModel
	) { }

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.createTodoSuccess?.notify(response.value);

		if (response.error instanceof TodoTitleTooShortError)
			return this._viewModel.createTodoFailField?.notify(
				new PresentNameTooShortError("title", response.error.value, `O Título precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			);

		if (response.error instanceof TodoTitleTooLongError)
			return this._viewModel.createTodoFailField?.notify(
				new PresentNameTooLongErrorDTO("title", response.error.value, `O Título precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			);

		if (response.error instanceof TodoDescriptionTooShortError)
			return this._viewModel.createTodoFailField?.notify(
				new PresentNameTooShortError("description", response.error.value, `A Descrição precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			);

		if (response.error instanceof TodoDescriptionTooLongError)
			return this._viewModel.createTodoFailField?.notify(
				new PresentNameTooLongErrorDTO("description", response.error.value, `A Descrição precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			);

		if (response.error instanceof GenericServiceError)
			return this._viewModel.createTodoFailMessage?.notify(new PresentGenericServiceMessageErrorDTO());

		this._viewModel.createTodoFailMessage?.notify(new PresentUnknownMessageErrorDTO());
	}
}
