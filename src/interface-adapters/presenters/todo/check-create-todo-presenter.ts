import { PresentNameTooShortError, PresentNameTooLongError, PresentUnknownMessageError } from "@/interface-adapters/errors";
import { ICheckCreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICheckCreateTodoOutputPort, ICheckDescriptionCreateTodoResponseModel, ICheckTitleCreateTodoResponseModel } from "@/use-cases/interfaces/todo";

export class CheckCreateTodoPresenter implements ICheckCreateTodoOutputPort {
	constructor(
		private _viewModel: ICheckCreateTodoViewModel
	) {}

	public checkTitleCreateTodoResponse({ response }: ICheckTitleCreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.checkCreateTodoSuccess?.notify();

		if (response.error instanceof TodoTitleTooShortError)
			return this._viewModel.checkCreateTodoFailField?.notify(
				new PresentNameTooShortError("title", response.error.value, `O Título precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			);

		if (response.error instanceof TodoTitleTooLongError)
			return this._viewModel.checkCreateTodoFailField?.notify(
				new PresentNameTooLongError("title", response.error.value, `O Título precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			);

		this._viewModel.checkCreateTodoFailField?.notify(new PresentUnknownMessageError());
	}

	public checkDescriptionCreateTodoResponse({ response }: ICheckDescriptionCreateTodoResponseModel): void {
		if (response.ok) return this._viewModel.checkCreateTodoSuccess?.notify();

		if (response.error instanceof TodoDescriptionTooShortError)
			return this._viewModel.checkCreateTodoFailField?.notify(
				new PresentNameTooShortError("description", response.error.value, `A Descrição precisa ter pelo menos ${response.error.minLength} caracteres.`, response.error.minLength)
			);

		if (response.error instanceof TodoDescriptionTooLongError)
			return this._viewModel.checkCreateTodoFailField?.notify(
				new PresentNameTooLongError("description", response.error.value, `A Descrição precisa ter no máximo ${response.error.maxLength} caracteres.`, response.error.maxLength)
			);

		this._viewModel.checkCreateTodoFailField?.notify(new PresentUnknownMessageError());
	}
}
