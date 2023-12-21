import { PresentGenericServiceMessageErrorDTO, PresentNameTooLongErrorDTO, PresentNameTooShortErrorDTO, PresentUnknownMessageErrorDTO } from "@/interface-adapters/dtos";
import { PresentFieldDTO } from "@/interface-adapters/dtos/present-field-dto";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { Result } from "@/shared/result";
import { ICreateTodoDescriptionResponseModel, ICreateTodoOutputPort, ICreateTodoResponseModel, ICreateTodoServiceResponseModel, ICreateTodoTitleResponseModel } from "@/use-cases/interfaces/todo";

export class CreateTodoPresenter implements ICreateTodoOutputPort {
	constructor(
		private _viewModel: ICreateTodoViewModel
	) { }

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.createTodo?.notify(Result.ok(response.value));
		this._viewModel.createTodo?.notify(Result.fail(undefined));
	}

	public createTodoTitleResponse({ response }: ICreateTodoTitleResponseModel): void {
		if (response.ok) return this._viewModel.createTodoField?.notify(Result.ok(new PresentFieldDTO("title")));

		if (response.error.isNameTooShortErrorDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooShortErrorDTO("title", response.error.value, `O título precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			));

		if (response.error.isNameTooLongErrorDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooLongErrorDTO("title", response.error.value, `O título precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			));

		this._viewModel.createTodoField?.notify(Result.fail(new PresentUnknownMessageErrorDTO()));
	}

	public createTodoDescriptionResponse({ response }: ICreateTodoDescriptionResponseModel): void {
		if (response.ok) return this._viewModel.createTodoField?.notify(Result.ok(new PresentFieldDTO("description")));

		if (response.error.isNameTooShortErrorDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooShortErrorDTO("description", response.error.value, `A descrição precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			));

		if (response.error.isNameTooLongErrorDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooLongErrorDTO("description", response.error.value, `A descrição precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			));

		this._viewModel.createTodoField?.notify(Result.fail(new PresentUnknownMessageErrorDTO()));
	}

	public createTodoServiceResponse({ response }: ICreateTodoServiceResponseModel): void {
		if (response.ok) return this._viewModel.createTodoMessage?.notify(Result.ok(undefined));
		this._viewModel.createTodoMessage?.notify(Result.fail(new PresentGenericServiceMessageErrorDTO()));
	}
}
