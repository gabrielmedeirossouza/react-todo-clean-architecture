import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooLongSuccessDTO, IPresentNameTooShortErrorDTO, IPresentNameTooShortSuccessDTO } from "../interfaces/dtos";

export class PresentNameTooLongSuccessDTO implements IPresentNameTooLongSuccessDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly maxLength: number
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
		return false;
	}

	public isPresentNameTooShortErrorDTO(): this is IPresentNameTooShortErrorDTO {
		return false;
	}

	public isPresentNameTooLongSuccessDTO(): this is IPresentNameTooLongSuccessDTO {
		return true;
	}

	public isPresentNameTooLongErrorDTO(): this is IPresentNameTooLongErrorDTO {
		return false;
	}
}
