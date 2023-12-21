import { Result } from "@/shared/result";
import { IPresentMessageDTO } from "../dtos";
import { IObservable } from "../observable";

export interface IRemoveTodoViewModel {
	removeTodo?: IObservable<Result<string, IPresentMessageDTO>>;
}
