import { Result } from "@/shared/result";
import { GenericServiceError } from "../errors";

export interface IHttp {
	get<T>(url: string): Promise<Result<T, GenericServiceError>>;
	post<T>(url: string, body: any): Promise<Result<T, GenericServiceError>>;
	put<T>(url: string, body: any): Promise<Result<T, GenericServiceError>>;
	delete<T>(url: string): Promise<Result<T, GenericServiceError>>;
}
