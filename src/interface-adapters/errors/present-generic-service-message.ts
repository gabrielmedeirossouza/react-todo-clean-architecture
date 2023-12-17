import { IPresentMessage } from "../interfaces/present-message";

export class PresentGenericServiceMessageError implements IPresentMessage {
	public readonly message = "Ocorreu um erro inesperado em nossos serviços. Por favor, tente novamente mais tarde.";
}
