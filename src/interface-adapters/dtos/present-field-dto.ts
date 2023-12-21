import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooLongSuccessDTO, IPresentNameTooShortErrorDTO, IPresentNameTooShortSuccessDTO } from "../interfaces/dtos";

export class PresentFieldDTO implements IPresentFieldDTO {
	constructor(
		public readonly field: string,
	) {}

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return true;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return false;
	}

	public isPresentNameTooShortSuccessDTO(): this is IPresentNameTooShortSuccessDTO {
		return false;
	}

	public isPresentNameTooShortErrorDTO(): this is IPresentNameTooShortErrorDTO {
		return false;
	}

	public isPresentNameTooLongSuccessDTO(): this is IPresentNameTooLongSuccessDTO {
		return false;
	}

	public isPresentNameTooLongErrorDTO(): this is IPresentNameTooLongErrorDTO {
		return false;
	}
}
