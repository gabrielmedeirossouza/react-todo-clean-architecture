import { Result } from "@/shared/result";
import { IObservable } from "../observable";
import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from "../dtos";

export interface ICheckCreateTodoViewModel {
	checkCreateTodoField?: IObservable<Result<IPresentFieldDTO, IPresentNameTooShortDTO | IPresentNameTooLongDTO | IPresentMessageDTO>>;
}
