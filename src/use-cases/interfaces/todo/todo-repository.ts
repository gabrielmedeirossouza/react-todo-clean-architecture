import { Result } from "@/shared/result";
import { IMessageDTO } from "../dtos";

export interface ITodoRepository {
	create(title: string, description: string, isCompleted: boolean): Promise<Result<string, IMessageDTO>>;
	remove(id: string): Promise<Result<string, IMessageDTO>>;
}
