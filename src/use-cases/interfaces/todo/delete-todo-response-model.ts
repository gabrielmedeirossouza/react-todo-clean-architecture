import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";

export interface IDeleteTodoResponseModel {
	response: Result<string, GenericServiceError>;
}
