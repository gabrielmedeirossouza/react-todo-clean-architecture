import { Result } from "@/shared/result";
import { GenericServiceErrorDTO } from "@/use-cases/dtos";
import { IMessageDTO } from "@/use-cases/interfaces/dtos";
import { IHttp } from "@/use-cases/interfaces/http";


export class Http implements IHttp {
	public async get<T>(url: string): Promise<Result<T, IMessageDTO>> {
		try {
			const response = await fetch(url);
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceErrorDTO());
		}
	}

	public async post<T>(url: string, body: any): Promise<Result<T, IMessageDTO>> {
		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceErrorDTO());
		}
	}

	public async put<T>(url: string, body: any): Promise<Result<T, IMessageDTO>> {
		try {
			const response = await fetch(url, {
				method: "PUT",
				body: JSON.stringify(body),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			});
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceErrorDTO());
		}
	}

	public async remove<T>(url: string): Promise<Result<T, IMessageDTO>> {
		try {
			const response = await fetch(url, {
				method: "DELETE"
			});
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceErrorDTO());
		}
	}
}
