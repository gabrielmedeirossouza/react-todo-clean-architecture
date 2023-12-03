import { GenericServiceError } from "@/shared/errors/generic-service-error";
import { Result } from "@/shared/result";

export interface IHttp {
	get<T>(url: string): Promise<Result<T, GenericServiceError>>;
	post<T>(url: string, body: any): Promise<Result<T, GenericServiceError>>;
}
