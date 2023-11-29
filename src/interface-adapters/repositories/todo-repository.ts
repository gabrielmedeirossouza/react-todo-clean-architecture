import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { ITodoRepository } from "@/use-cases/interfaces/todo-repository";
import { IHttp } from "../interfaces/http";

export class TodoRepository implements ITodoRepository {
	constructor(
		private _http: IHttp
	) {}

	public async create(todo: ITodo) {
		const response = await this._http.post("www.it-is-a-fake-url.com", todo);
		if (!response.ok) return response;

		return Result.ok(undefined);
	}
}
