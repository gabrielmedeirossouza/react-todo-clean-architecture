import { IObservable } from "../observable";
import { Result } from "@/shared/result";
import { ITodo } from "@/entities/interfaces/todo";
import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooShortErrorDTO } from "../dtos";

export interface ICreateTodoViewModel {
	createTodo?: IObservable<Result<ITodo, void>>;
	createTodoField?: IObservable<Result<IPresentFieldDTO, IPresentNameTooShortErrorDTO | IPresentNameTooLongErrorDTO | IPresentMessageDTO>>;
	createTodoMessage?: IObservable<Result<void, IPresentMessageDTO>>;
}
