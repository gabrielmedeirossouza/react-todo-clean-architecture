import { Result } from "@/shared/result";
import { IObservable } from "../observable";
import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooShortErrorDTO } from "../dtos";

export interface ICheckCreateTodoViewModel {
	checkCreateTodoField?: IObservable<Result<IPresentFieldDTO, IPresentNameTooShortErrorDTO | IPresentNameTooLongErrorDTO | IPresentMessageDTO>>;
}
