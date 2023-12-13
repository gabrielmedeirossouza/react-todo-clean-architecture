import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";

export interface IRemoveTodoResponseModel {
	response: Result<string, GenericServiceError>;
}
