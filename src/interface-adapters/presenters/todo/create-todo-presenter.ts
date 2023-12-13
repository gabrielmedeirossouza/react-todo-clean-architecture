import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "@/interface-adapters/errors/todo";
import { ICreateTodoPresenterOutputPort } from "@/interface-adapters/interfaces/todo/create-todo-presenter-output-port";
import { GenericServiceError } from "@/use-cases/errors";
import { TodoDescriptionTooLongError, TodoDescriptionTooShortError, TodoTitleTooLongError, TodoTitleTooShortError } from "@/use-cases/errors/todo";
import { ICreateTodoResponseModel, ICreateTodoOutputPort } from "@/use-cases/interfaces/todo";

export class CreateTodoPresenter implements ICreateTodoOutputPort {
	constructor(
		private _createTodoPresenterOutputPort: ICreateTodoPresenterOutputPort
	) {}

	public createTodoResponse({ response }: ICreateTodoResponseModel): void {
		if (response.ok) return this._createTodoPresenterOutputPort.createSuccessResponse(response.value);

		if (response.error instanceof TodoTitleTooShortError)
			return this._createTodoPresenterOutputPort.createFailFieldResponse(
				new TodoTitleFieldValidationError(`O Título precisa ter pelo menos ${response.error.minLength} caracteres.`)
			);

		if (response.error instanceof TodoTitleTooLongError)
			return this._createTodoPresenterOutputPort.createFailFieldResponse(
				new TodoTitleFieldValidationError(`O Título precisa ter no máximo ${response.error.maxLength} caracteres.`)
			);


		if (response.error instanceof TodoDescriptionTooShortError)
			return this._createTodoPresenterOutputPort.createFailFieldResponse(
				new TodoDescriptionFieldValidationError(`A Descrição precisa ter pelo menos ${response.error.minLength} caracteres.`)
			);

		if (response.error instanceof TodoDescriptionTooLongError)
			return this._createTodoPresenterOutputPort.createFailFieldResponse(
				new TodoDescriptionFieldValidationError(`A Descrição precisa ter no máximo ${response.error.maxLength} caracteres.`)
			);

		if (response.error instanceof GenericServiceError)
			return this._createTodoPresenterOutputPort.createFailMessageResponse(
				new GenericServiceMessageError()
			);

		this._createTodoPresenterOutputPort.createFailMessageResponse(new UnknownMessageError());
	}
}
