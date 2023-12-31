import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from "../interfaces/dtos";

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

	public isPresentNameTooShortDTO(): this is IPresentNameTooShortDTO {
		return false;
	}

	public isPresentNameTooLongDTO(): this is IPresentNameTooLongDTO {
		return false;
	}
}
