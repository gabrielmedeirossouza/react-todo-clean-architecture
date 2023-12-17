import { IObservable } from "../observable";
import { IPresentNameTooShort } from "../present-name-too-short";
import { IPresentNameTooLong } from "../present-name-too-long";
import { IPresentMessage } from "../present-message";

export interface ICheckCreateTodoViewModel {
	checkCreateTodoSuccess?: IObservable<void>;
	checkCreateTodoFailField?: IObservable<IPresentNameTooShort | IPresentNameTooLong | IPresentMessage>;
}
