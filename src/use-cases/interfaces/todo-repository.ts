import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/shared/errors/generic-service-error";

export interface ITodoRepository {
	create(todo: ITodo): Promise<Result<void, GenericServiceError>>;
}
