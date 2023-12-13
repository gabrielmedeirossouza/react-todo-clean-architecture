import { GenericServiceMessageError, UnknownMessageError } from "../../errors";
import { TodoDescriptionFieldValidationError, TodoTitleFieldValidationError } from "../../errors/todo";
import { ITodo } from "@/entities/interfaces/todo";

export interface ICreateTodoViewModel {
	onCreateTodoSuccess?: (todo: ITodo) => void;
	onCreateTodoFailField?: (error: TodoTitleFieldValidationError | TodoDescriptionFieldValidationError) => void;
	onCreateTodoFailMessage?: (error: GenericServiceMessageError | UnknownMessageError) => void;
}
