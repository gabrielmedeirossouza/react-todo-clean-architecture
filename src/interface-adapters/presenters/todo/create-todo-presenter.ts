import { PresentGenericServiceMessageDTO, PresentNameTooLongDTO, PresentNameTooShortDTO, PresentUnknownMessageDTO } from "@/interface-adapters/dtos";
import { PresentFieldDTO } from "@/interface-adapters/dtos/present-field-dto";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { Result } from "@/shared/result";
import { ICreateTodoDescriptionResponseModel, ICreateTodoOutputPort, ICreateTodoResponseModel, ICreateTodoServiceResponseModel, ICreateTodoTitleResponseModel } from "@/use-cases/interfaces/todo";

export class CreateTodoPresenter implements ICreateTodoOutputPort {
	constructor(
		private _viewModel: ICreateTodoViewModel
	) { }

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.createTodo?.notify(Result.ok(response.okValue));
		this._viewModel.createTodo?.notify(Result.fail(undefined));
	}

	public createTodoTitleResponse({ response }: ICreateTodoTitleResponseModel): void {
		if (response.ok) return this._viewModel.createTodoField?.notify(Result.ok(new PresentFieldDTO("title")));

		if (response.failValue.isNameTooShortDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooShortDTO("title", response.failValue.value, `O título precisa ter pelo menos ${response.failValue.minLength} caracteres.`, response.failValue.minLength)
			));

		if (response.failValue.isNameTooLongDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooLongDTO("title", response.failValue.value, `O título precisa ter no máximo ${response.failValue.maxLength} caracteres.`, response.failValue.maxLength)
			));

		this._viewModel.createTodoField?.notify(Result.fail(new PresentUnknownMessageDTO()));
	}

	public createTodoDescriptionResponse({ response }: ICreateTodoDescriptionResponseModel): void {
		if (response.ok) return this._viewModel.createTodoField?.notify(Result.ok(new PresentFieldDTO("description")));

		if (response.failValue.isNameTooShortDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooShortDTO("description", response.failValue.value, `A descrição precisa ter pelo menos ${response.failValue.minLength} caracteres.`, response.failValue.minLength)
			));

		if (response.failValue.isNameTooLongDTO())
			return this._viewModel.createTodoField?.notify(Result.fail(
				new PresentNameTooLongDTO("description", response.failValue.value, `A descrição precisa ter no máximo ${response.failValue.maxLength} caracteres.`, response.failValue.maxLength)
			));

		this._viewModel.createTodoField?.notify(Result.fail(new PresentUnknownMessageDTO()));
	}

	public createTodoServiceResponse({ response }: ICreateTodoServiceResponseModel): void {
		if (response.ok) return this._viewModel.createTodoMessage?.notify(Result.ok(undefined));
		this._viewModel.createTodoMessage?.notify(Result.fail(new PresentGenericServiceMessageDTO()));
	}
}
