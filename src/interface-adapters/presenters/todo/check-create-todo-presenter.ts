import { PresentNameTooLongErrorDTO, PresentNameTooShortErrorDTO, PresentUnknownMessageErrorDTO } from "@/interface-adapters/dtos";
import { PresentFieldDTO } from "@/interface-adapters/dtos/present-field-dto";
import { ICheckCreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { Result } from "@/shared/result";
import { ICheckCreateTodoOutputPort, ICheckDescriptionCreateTodoResponseModel, ICheckTitleCreateTodoResponseModel } from "@/use-cases/interfaces/todo";

export class CheckCreateTodoPresenter implements ICheckCreateTodoOutputPort {
	constructor(
		private _viewModel: ICheckCreateTodoViewModel
	) {}

	public checkCreateTodoTitleResponse({ response }: ICheckTitleCreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.checkCreateTodoField?.notify(Result.ok(new PresentFieldDTO("title")));

		if (response.error.isNameTooShortErrorDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooShortErrorDTO("title", response.error.value, `O título precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			));

		if (response.error.isNameTooLongErrorDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooLongErrorDTO("title", response.error.value, `O título precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			));

		this._viewModel.checkCreateTodoField?.notify(Result.fail(new PresentUnknownMessageErrorDTO()));
	}

	public checkCreateTodoDescriptionResponse({ response }: ICheckDescriptionCreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.checkCreateTodoField?.notify(Result.ok(new PresentFieldDTO("description")));

		if (response.error.isNameTooShortErrorDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooShortErrorDTO("description", response.error.value, `A descrição precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			));

		if (response.error.isNameTooLongErrorDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooLongErrorDTO("description", response.error.value, `A descrição precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			));

		this._viewModel.checkCreateTodoField?.notify(Result.fail(new PresentUnknownMessageErrorDTO()));
	}
}
