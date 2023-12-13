import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";

export interface ITodoRepository {
	create(title: string, description: string, isCompleted: boolean): Promise<Result<string, GenericServiceError>>;
	remove(id: string): Promise<Result<string, GenericServiceError>>;
}
