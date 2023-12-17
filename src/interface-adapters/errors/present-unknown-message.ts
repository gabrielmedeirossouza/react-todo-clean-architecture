import { IPresentMessage } from "../interfaces/present-message";

export class PresentUnknownMessageError implements IPresentMessage {
	public readonly message = "Erro desconhecido. Por favor, tente novamente mais tarde.";
}
