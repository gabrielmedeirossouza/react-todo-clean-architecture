import { Result } from "@/shared/result";
import { GenericServiceError } from "@/use-cases/errors";
import { IHttp } from "@/use-cases/interfaces/http";


export class Http implements IHttp {
	public async get<T>(url: string): Promise<Result<T, GenericServiceError>> {
		try {
			const response = await fetch(url);
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceError());
		}
	}

	public async post<T>(url: string, body: any): Promise<Result<T, GenericServiceError>> {
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
			return Result.fail(new GenericServiceError());
		}
	}

	public async put<T>(url: string, body: any): Promise<Result<T, GenericServiceError>> {
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
			return Result.fail(new GenericServiceError());
		}
	}

	public async delete<T>(url: string): Promise<Result<T, GenericServiceError>> {
		try {
			const response = await fetch(url, {
				method: "DELETE"
			});
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceError());
		}
	}
}
