import { GenericServiceMessageError, UnknownMessageError } from "@/interface-adapters/errors";

export interface IRemoveTodoViewModel {
	onRemoveTodoSuccess?: (id: string) => void;
	onRemoveTodoFailMessage?: (error: GenericServiceMessageError | UnknownMessageError) => void;
}
