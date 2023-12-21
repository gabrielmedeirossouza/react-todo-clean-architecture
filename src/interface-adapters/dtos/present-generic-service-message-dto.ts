import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from "../interfaces/dtos";

export class PresentGenericServiceMessageDTO implements IPresentMessageDTO {
	public readonly message = "Ocorreu um erro inesperado em nossos serviços. Por favor, tente novamente mais tarde.";

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return false;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return true;
	}

	public isPresentNameTooLongDTO(): this is IPresentNameTooLongDTO {
		return false;
	}

	public isPresentNameTooShortDTO(): this is IPresentNameTooShortDTO {
		return false;
	}
}
