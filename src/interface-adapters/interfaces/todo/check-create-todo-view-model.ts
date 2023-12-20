import { IObservable } from "../observable";
import { IPresentNameTooShort } from "../dtos/present-name-too-short-error-dto";
import { IPresentNameTooLong } from "../dtos/present-name-too-long-error-dto";
import { IPresentMessage } from "../dtos/present-message-dto";
import { IPresentField } from "../dtos/present-field-dto";

export interface ICheckCreateTodoViewModel {
	checkCreateTodoSuccess?: IObservable<IPresentField>;
	checkCreateTodoFailField?: IObservable<IPresentNameTooShort | IPresentNameTooLong>;
	checkCreateTodoFailMessage?: IObservable<IPresentMessage>;
}
