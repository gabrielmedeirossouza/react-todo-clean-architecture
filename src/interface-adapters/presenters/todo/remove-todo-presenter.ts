import { PresentGenericServiceMessageErrorDTO, PresentUnknownMessageErrorDTO } from "@/interface-adapters/dtos";
import { IRemoveTodoViewModel } from "@/interface-adapters/interfaces/todo/remove-todo-view-model";
import { GenericServiceError } from "@/use-cases/errors";
import { IRemoveTodoOutputPort } from "@/use-cases/interfaces/todo/remove-todo-output-port";
import { IRemoveTodoResponseModel } from "@/use-cases/interfaces/todo/remove-todo-response-model";

export class RemoveTodoPresenter implements IRemoveTodoOutputPort {
	constructor(
		private _viewModel: IRemoveTodoViewModel
	) {}

	public removeTodoResponse({ response }: IRemoveTodoResponseModel): void {
		if (response.ok) return this._viewModel.removeTodoSuccess?.notify(response.value);

		if (response.error instanceof GenericServiceError)
			return this._viewModel.removeTodoFailMessage?.notify(new PresentGenericServiceMessageErrorDTO());

		this._viewModel.removeTodoFailMessage?.notify(new PresentUnknownMessageErrorDTO());
	}
}
