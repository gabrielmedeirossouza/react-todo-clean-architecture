import { PresentGenericServiceMessageDTO, PresentUnknownMessageDTO } from "@/interface-adapters/dtos";
import { IRemoveTodoViewModel } from "@/interface-adapters/interfaces/todo/remove-todo-view-model";
import { Result } from "@/shared/result";
import { IRemoveTodoOutputPort, IRemoveTodoResponseModel } from "@/use-cases/interfaces/todo";

export class RemoveTodoPresenter implements IRemoveTodoOutputPort {
	constructor(
		private _viewModel: IRemoveTodoViewModel
	) {}

	public removeTodoResponse({ response }: IRemoveTodoResponseModel): void {
		if (response.ok) return this._viewModel.removeTodo?.notify(Result.ok(response.okValue));

		if (response.failValue.isMessageDTO())
			return this._viewModel.removeTodo?.notify(Result.fail(new PresentGenericServiceMessageDTO()));

		this._viewModel.removeTodo?.notify(Result.fail(new PresentUnknownMessageDTO()));
	}
}
