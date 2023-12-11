import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { IDeleteTodoViewModel } from "@/interface-adapters/interfaces/todo/delete-todo-view-model";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { IDeleteTodoOutputPort, IDeleteTodoResponseModel } from "@/use-cases/interfaces/todo";

export class DeleteTodoPresenter implements IDeleteTodoOutputPort {
	constructor(
		private _updateView: (viewModel: IDeleteTodoViewModel) => void
	) {}

	public deleteTodoResponse({ response }: IDeleteTodoResponseModel): void {
		if (response.ok) return this._updateView({ viewModel: Result.ok(response.value) });

		if (response.error instanceof GenericServiceError)
			return this._updateView({
				viewModel: Result.fail(new GenericServiceMessageError())
			});

		this._updateView({ viewModel: Result.fail(new UnknownMessageError()) });
	}
}
