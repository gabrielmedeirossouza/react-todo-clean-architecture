import { ITodo } from "@/entities/interfaces/todo";
import { Result } from "@/shared/result";
import { ITodoRepository } from "@/use-cases/interfaces/todo-repository";
import { IHttp } from "../../use-cases/interfaces/http";

export class TodoRepository implements ITodoRepository {
	constructor(
		private _http: IHttp
	) {}

	public async create(todo: ITodo) {
		const response = await this._http.post("www.it-is-a-fake-url.com", todo);
		if (!response.ok) return response;

		// This is a fake id, just to simulate a database id
		return Result.ok(String(Math.random() * 10000 + 1));
	}
}
