import { IObservable } from "../observable";
import { IPresentMessage } from "../dtos/present-message-dto";

export interface IRemoveTodoViewModel {
	removeTodoSuccess?: IObservable<string>;
	removeTodoFailMessage?: IObservable<IPresentMessage>;
}
