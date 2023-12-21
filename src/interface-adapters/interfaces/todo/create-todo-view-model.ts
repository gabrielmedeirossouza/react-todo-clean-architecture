import { IObservable } from "../observable";
import { Result } from "@/shared/result";
import { ITodo } from "@/entities/interfaces/todo";
import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from "../dtos";

export interface ICreateTodoViewModel {
	createTodo?: IObservable<Result<ITodo, void>>;
	createTodoField?: IObservable<Result<IPresentFieldDTO, IPresentNameTooShortDTO | IPresentNameTooLongDTO | IPresentMessageDTO>>;
	createTodoMessage?: IObservable<Result<void, IPresentMessageDTO>>;
}
