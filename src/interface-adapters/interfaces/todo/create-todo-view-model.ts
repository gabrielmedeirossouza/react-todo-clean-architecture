import { ITodo } from "@/entities/interfaces/todo";
import { IObservable } from "../observable";
import { IPresentNameTooShort } from "../present-name-too-short";
import { IPresentNameTooLong } from "../present-name-too-long";
import { IPresentMessage } from "../present-message";

export interface ICreateTodoViewModel {
	createTodoSuccess?: IObservable<ITodo>;
	createTodoFailField?: IObservable<IPresentNameTooShort | IPresentNameTooLong>;
	createTodoFailMessage?: IObservable<IPresentMessage>;
}
