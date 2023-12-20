import { Result } from "@/shared/result";
import { ICreateTodoRequestModel, ICreateTodoInputPort, ICreateTodoOutputPort, ITodoRepository, ITodoValidationService } from "../interfaces/todo";
import { Todo } from "@/entities/todo";

export class CreateTodoUseCase implements ICreateTodoInputPort {
	constructor(
		private _todoValidationService: ITodoValidationService,
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: ICreateTodoOutputPort
	) { }

	public async createTodoRequest({ title, description }: ICreateTodoRequestModel): Promise<void> {
		const results = [
			this._todoValidationService.validateTitleTooShort(title),
			this._todoValidationService.validateTitleTooLong(title),
			this._todoValidationService.validateDescriptionTooShort(description),
			this._todoValidationService.validateDescriptionTooLong(description)
		] as const;

		const [titleTooShort, titleTooLong, descriptionTooShort, descriptionTooLong] = results;

		this._todoOutputPort.createTodoTitleResponse({ response: titleTooShort });
		this._todoOutputPort.createTodoTitleResponse({ response: titleTooLong });
		this._todoOutputPort.createTodoDescriptionResponse({ response: descriptionTooShort });
		this._todoOutputPort.createTodoDescriptionResponse({ response: descriptionTooLong });

		if (results.some(result => !result.ok)) return this._todoOutputPort.createTodoResponse({ response: Result.fail(undefined) });

		const createdTodo = await this._todoRepository.create(title, description, false);
		if (!createdTodo.ok) {
			this._todoOutputPort.createTodoServiceResponse({ response: createdTodo });
			this._todoOutputPort.createTodoResponse({ response: Result.fail(undefined) });
			return;
		}
		this._todoOutputPort.createTodoServiceResponse({ response: Result.ok(undefined) });
		const todo = new Todo(createdTodo.value, title, description, false);

		this._todoOutputPort.createTodoResponse({ response: Result.ok(todo) });
	}
}
