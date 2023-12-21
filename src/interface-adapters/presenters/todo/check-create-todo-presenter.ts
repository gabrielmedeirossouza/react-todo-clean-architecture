import { PresentNameTooLongDTO, PresentNameTooShortDTO, PresentUnknownMessageDTO } from "@/interface-adapters/dtos";
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

		if (response.failValue.isNameTooShortDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooShortDTO("title", response.failValue.value, `O título precisa ter pelo menos ${response.failValue.minLength} caracteres.`, response.failValue.minLength)
			));

		if (response.failValue.isNameTooLongDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooLongDTO("title", response.failValue.value, `O título precisa ter no máximo ${response.failValue.maxLength} caracteres.`, response.failValue.maxLength)
			));

		this._viewModel.checkCreateTodoField?.notify(Result.fail(new PresentUnknownMessageDTO()));
	}

	public checkCreateTodoDescriptionResponse({ response }: ICheckDescriptionCreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.checkCreateTodoField?.notify(Result.ok(new PresentFieldDTO("description")));

		if (response.failValue.isNameTooShortDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooShortDTO("description", response.failValue.value, `A descrição precisa ter pelo menos ${response.failValue.minLength} caracteres.`, response.failValue.minLength)
			));

		if (response.failValue.isNameTooLongDTO())
			return this._viewModel.checkCreateTodoField?.notify(Result.fail(
				new PresentNameTooLongDTO("description", response.failValue.value, `A descrição precisa ter no máximo ${response.failValue.maxLength} caracteres.`, response.failValue.maxLength)
			));

		this._viewModel.checkCreateTodoField?.notify(Result.fail(new PresentUnknownMessageDTO()));
	}
}
