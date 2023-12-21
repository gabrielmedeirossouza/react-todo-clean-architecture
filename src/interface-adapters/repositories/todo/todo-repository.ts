import { Result } from "@/shared/result";
import { IMessageDTO } from "@/use-cases/interfaces/dtos";
import { IHttp } from "@/use-cases/interfaces/http";
import { ITodoRepository } from "@/use-cases/interfaces/todo";


export class TodoRepository implements ITodoRepository {
	constructor(
		private _http: IHttp
	) {}

	public async create(title: string, description: string, isCompleted: boolean): Promise<Result<string, IMessageDTO>> {
		const response = await this._http.post("www.it-is-a-fake-url.com", {
			title,
			description,
			isCompleted
		});
		if (!response.ok) return response;

		// This is a fake id, just to simulate a database id
		return Result.ok(String(Math.random() * 10000 + 1));
	}

	public async remove(id: string): Promise<Result<string, IMessageDTO>> {
		const response = await this._http.remove(`www.it-is-a-fake-url.com/${id}`);
		if (!response.ok) return response;

		return Result.ok(id);
	}
}
