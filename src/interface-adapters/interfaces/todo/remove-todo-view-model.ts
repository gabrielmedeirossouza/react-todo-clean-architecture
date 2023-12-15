import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";
import { IObservable } from "../observable";

export interface IRemoveTodoViewModel {
	removeTodoSuccess?: IObservable<string>;
	removeTodoFailMessage?: IObservable<GenericServiceMessageError | UnknownMessageError>;
}
