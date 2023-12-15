import { GenericServiceMessageError, UnknownMessageError } from "../../errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "../../errors/todo";
import { ITodo } from "@/entities/interfaces/todo";
import { IObservable } from "../observable";

export interface ICreateTodoViewModel {
	createTodoSuccess?: IObservable<ITodo>
	createTodoFailField?: IObservable<TodoTitleFieldValidationError | TodoDescriptionFieldValidationError>
	createTodoFailMessage?: IObservable<GenericServiceMessageError | UnknownMessageError>
}
