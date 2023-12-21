import { Result } from "@/shared/result";
import { IMessageDTO } from "./dtos";

export interface IHttp {
	get<T>(url: string): Promise<Result<T, IMessageDTO>>;
	post<T>(url: string, body: any): Promise<Result<T, IMessageDTO>>;
	put<T>(url: string, body: any): Promise<Result<T, IMessageDTO>>;
	remove<T>(url: string): Promise<Result<T, IMessageDTO>>;
}
