import { IObservable } from "../observable";
import { IPresentNameTooShort } from "../present-name-too-short";
import { IPresentNameTooLong } from "../present-name-too-long";
import { IPresentMessage } from "../present-message";
import { IPresentField } from "../present-field";

export interface ICheckCreateTodoViewModel {
	checkCreateTodoSuccess?: IObservable<IPresentField>;
	checkCreateTodoFailField?: IObservable<IPresentNameTooShort | IPresentNameTooLong>;
	checkCreateTodoFailMessage?: IObservable<IPresentMessage>;
}
