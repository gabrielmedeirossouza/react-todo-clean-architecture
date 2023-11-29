import { Result } from "@/shared/result";
import { ITodoOutputDTO } from "./todo-output-dto";

export interface ITodoController {
	createTodo(title: string, description: string): Promise<Result<ITodoOutputDTO, string>>;
}
