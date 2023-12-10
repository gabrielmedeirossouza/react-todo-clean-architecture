import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "@/interface-adapters/errors/todo";
import { ICreateTodoViewModel } from "@/interface-adapters/interfaces/todo";
import { IDeleteTodoViewModel } from "@/interface-adapters/interfaces/todo/delete-todo-view-model";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICreateTodoResponseModel, IDeleteTodoResponseModel, ITodoOutputPort } from "@/use-cases/interfaces/todo";

interface ITodoPresenterParams {
	createTodoUpdateView?: (viewModel: ICreateTodoViewModel) => void;
	deleteTodoUpdateView?: (viewModel: IDeleteTodoViewModel) => void;
}

export class TodoPresenter implements ITodoOutputPort {
	private _createTodoUpdateView?: (viewModel: ICreateTodoViewModel) => void;
	private _deleteTodoUpdateView?: (viewModel: IDeleteTodoViewModel) => void;

	constructor({ createTodoUpdateView, deleteTodoUpdateView }: ITodoPresenterParams) {
		this._createTodoUpdateView = createTodoUpdateView;
		this._deleteTodoUpdateView = deleteTodoUpdateView;
	}

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._createTodoUpdateView?.({
			viewModel: Result.ok({
				id: response.value.id,
				...response.value.entity
			})
		});


		if (response.error instanceof TodoTitleTooShortError)
			return this._createTodoUpdateView?.({
				viewModel: Result.fail(new TodoTitleFieldValidationError(`O Título precisa ter pelo menos ${response.error.minLength} caracteres.`))
			});

		if (response.error instanceof TodoTitleTooLongError)
			return this._createTodoUpdateView?.({
				viewModel: Result.fail(new TodoTitleFieldValidationError(`O Título precisa ter no máximo ${response.error.maxLength} caracteres.`))
			});

		if (response.error instanceof TodoDescriptionTooShortError)
			return this._createTodoUpdateView?.({
				viewModel: Result.fail(new TodoDescriptionFieldValidationError(`A Descrição precisa ter pelo menos ${response.error.minLength} caracteres.`))
			});

		if (response.error instanceof TodoDescriptionTooLongError)
			return this._createTodoUpdateView?.({
				viewModel: Result.fail(new TodoDescriptionFieldValidationError(`A Descrição precisa ter no máximo ${response.error.maxLength} caracteres.`))
			});

		if (response.error instanceof GenericServiceError)
			return this._createTodoUpdateView?.({
				viewModel: Result.fail(new GenericServiceMessageError())
			});

		this._createTodoUpdateView?.({ viewModel: Result.fail(new UnknownMessageError()) });
	}

	public deleteTodoResponse({ response }: IDeleteTodoResponseModel): void {
		if (response.ok) return this._deleteTodoUpdateView?.({ viewModel: Result.ok(response.value) });

		if (response.error instanceof GenericServiceError)
			return this._deleteTodoUpdateView?.({
				viewModel: Result.fail(new GenericServiceMessageError())
			});

		this._deleteTodoUpdateView?.({ viewModel: Result.fail(new UnknownMessageError()) });
	}
}
