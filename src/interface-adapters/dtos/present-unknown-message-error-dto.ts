import { IPresentMessageDTO } from "../interfaces/dtos";

export class PresentUnknownMessageErrorDTO implements IPresentMessageDTO {
	public readonly message = "Erro desconhecido. Por favor, tente novamente mais tarde.";
}
