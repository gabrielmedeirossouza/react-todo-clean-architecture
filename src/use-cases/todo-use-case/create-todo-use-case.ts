import { Result } from "@/shared/result";
import { ICreateTodoRequestModel, ICreateTodoInputPort, ICreateTodoOutputPort, ITodoRepository, ITodoValidationService } from "../interfaces/todo";
import { Todo } from "@/entities/todo";
import { FieldDTO } from "../dtos/field-dto";

export class CreateTodoUseCase implements ICreateTodoInputPort {
	constructor(
		private _todoValidationService: ITodoValidationService,
		private _todoRepository: ITodoRepository,
		private _todoOutputPort: ICreateTodoOutputPort
	) { }

	public async createTodoRequest({ title, description }: ICreateTodoRequestModel): Promise<void> {
		const resultTitleTooShort = this._todoValidationService.validateTitleTooShort(title);
		const resultTitleTooLong = this._todoValidationService.validateTitleTooLong(title);
		const resultDescriptionTooShort = this._todoValidationService.validateDescriptionTooShort(description);
		const resultDescriptionTooLong = this._todoValidationService.validateDescriptionTooLong(description);

		if (!resultTitleTooShort.ok) this._todoOutputPort.createTodoTitleResponse({ response: resultTitleTooShort });
		if (!resultTitleTooLong.ok) this._todoOutputPort.createTodoTitleResponse({ response: resultTitleTooLong });
		if (!resultDescriptionTooShort.ok) this._todoOutputPort.createTodoDescriptionResponse({ response: resultDescriptionTooShort });
		if (!resultDescriptionTooLong.ok) this._todoOutputPort.createTodoDescriptionResponse({ response: resultDescriptionTooLong });

		const hasError =
			!resultTitleTooShort.ok ||
			!resultTitleTooLong.ok ||
			!resultDescriptionTooShort.ok ||
			!resultDescriptionTooLong.ok;

		if (hasError) return this._todoOutputPort.createTodoResponse({ response: Result.fail(undefined) });

		this._todoOutputPort.createTodoTitleResponse({ response: Result.ok(new FieldDTO("title")) });
		this._todoOutputPort.createTodoDescriptionResponse({ response: Result.ok(new FieldDTO("description")) });

		const createdTodo = await this._todoRepository.create(title, description, false);
		if (!createdTodo.ok) return this._todoOutputPort.createTodoServiceResponse({ response: createdTodo });
		this._todoOutputPort.createTodoServiceResponse({ response: Result.ok(undefined) });
		const todo = new Todo(createdTodo.value, title, description, false);

		this._todoOutputPort.createTodoResponse({ response: Result.ok(todo) });
	}
}
