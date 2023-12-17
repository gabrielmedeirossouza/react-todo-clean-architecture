import { IObservable } from "../observable";
import { IPresentMessage } from "../present-message";

export interface IRemoveTodoViewModel {
	removeTodoSuccess?: IObservable<string>;
	removeTodoFailMessage?: IObservable<IPresentMessage>;
}
