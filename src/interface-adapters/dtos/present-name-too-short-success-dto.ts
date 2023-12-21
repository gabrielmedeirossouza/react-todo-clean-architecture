import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooLongSuccessDTO, IPresentNameTooShortErrorDTO, IPresentNameTooShortSuccessDTO } from "../interfaces/dtos";

export class PresentNameTooShortSuccessDTO implements IPresentNameTooShortSuccessDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly minLength: number
	) {
		this.currentLength = value.length;
	}

	public isPresentFieldDTO(): this is IPresentFieldDTO {
		return true;
	}

	public isPresentMessageDTO(): this is IPresentMessageDTO {
		return true;
	}

	public isPresentNameTooShortSuccessDTO(): this is IPresentNameTooShortSuccessDTO {
		return true;
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
