import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooLongSuccessDTO, IPresentNameTooShortErrorDTO, IPresentNameTooShortSuccessDTO } from "../interfaces/dtos";

export class PresentGenericServiceMessageErrorDTO implements IPresentMessageDTO {
	public readonly message = "Ocorreu um erro inesperado em nossos serviços. Por favor, tente novamente mais tarde.";

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return false;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return true;
	}

	public isPresentNameTooShortSuccessDTO(): this is IPresentNameTooShortSuccessDTO {
		return false;
	}

	public isPresentNameTooLongErrorDTO(): this is IPresentNameTooLongErrorDTO {
		return false;
	}

	public isPresentNameTooLongSuccessDTO(): this is IPresentNameTooLongSuccessDTO {
		return false;
	}

	public isPresentNameTooShortErrorDTO(): this is IPresentNameTooShortErrorDTO {
		return false;
	}
}
