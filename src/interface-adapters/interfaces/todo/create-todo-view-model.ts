import { ITodo } from "@/entities/interfaces/todo";
import { IObservable } from "../observable";

export interface ICreateTodoViewModel {
	createTodoSuccess?: IObservable<ITodo>;
	createTodoFailField?: IObservable<IPresentNameTooShort | IPresentNameTooLong>;
	createTodoFailMessage?: IObservable<IPresentMessage>;
}
