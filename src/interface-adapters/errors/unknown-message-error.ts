import { MessageErrorProtocol } from "./protocols/message-error-protocol";

export class UnknownMessageError extends MessageErrorProtocol {
	public readonly message = "Erro desconhecido. Por favor, tente novamente mais tarde.";
}
