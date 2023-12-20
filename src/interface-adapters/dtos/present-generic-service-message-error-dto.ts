import { IPresentMessageDTO } from "../interfaces/dtos";

export class PresentGenericServiceMessageErrorDTO implements IPresentMessageDTO {
	public readonly message = "Ocorreu um erro inesperado em nossos serviços. Por favor, tente novamente mais tarde.";
}
