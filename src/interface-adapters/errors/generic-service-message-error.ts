import { MessageErrorProtocol } from "./protocols/message-error-protocol";

export class GenericServiceMessageError extends MessageErrorProtocol {
	public readonly message = "Ocorreu um erro inesperado em nossos serviços. Por favor, tente novamente mais tarde.";
}
