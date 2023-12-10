import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";

export interface ITodoRepository {
	create(todo: ITodo): Promise<Result<string, GenericServiceError>>;
	delete(id: string): Promise<Result<string, GenericServiceError>>;
}
