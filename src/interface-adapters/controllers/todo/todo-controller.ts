import { ITodoController } from "@/interface-adapters/interfaces/todo";
import { ICheckCreateTodoInputPort, ICreateTodoInputPort, IRemoveTodoInputPort } from "@/use-cases/interfaces/todo";

interface ITodoControllerDependencies {
	checkCreateTodoUseCase: ICheckCreateTodoInputPort;
	createTodoUseCase: ICreateTodoInputPort;
	removeTodoUseCase: IRemoveTodoInputPort;
}

export class TodoController implements ITodoController {
	private _checkCreateTodoUseCase: ICheckCreateTodoInputPort;
	private _createTodoUseCase: ICreateTodoInputPort;
	private _removeTodoUseCase: IRemoveTodoInputPort;

	constructor({ checkCreateTodoUseCase, createTodoUseCase, removeTodoUseCase }: ITodoControllerDependencies) {
		this._checkCreateTodoUseCase = checkCreateTodoUseCase;
		this._createTodoUseCase = createTodoUseCase;
		this._removeTodoUseCase = removeTodoUseCase;
	}

	public checkCreateTodoTitle(title: string): void {
		this._checkCreateTodoUseCase.checkTitleCreateTodoRequest({ title });
	}

	public checkCreateTodoDescription(description: string): void {
		this._checkCreateTodoUseCase.checkDescriptionCreateTodoRequest({ description });
	}

	public async createTodo(title: string, description: string): Promise<void> {
		await this._createTodoUseCase.createTodoRequest({ title, description });
	}

	public async removeTodo(id: string): Promise<void> {
		await this._removeTodoUseCase.removeTodoRequest({ id });
	}
}
