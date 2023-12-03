import { Result } from "@/shared/result";
import { GenericServiceError } from "@/shared/errors/generic-service-error";
import { IHttp } from "@/use-cases/interfaces/http";

export class Http implements IHttp {
	public async get<T>(url: string) {
		try {
			const response = await fetch(url);
			const data = await response.json();

			return Result.ok(data as T);
		} catch (error) {
			return Result.fail(new GenericServiceError());
		}
	}

	public async post<T>(url: string, body: any) {
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
}
