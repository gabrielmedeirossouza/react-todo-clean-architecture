import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from "../interfaces/dtos";

export class PresentNameTooLongDTO implements IPresentNameTooLongDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly message: string,
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

	public isPresentNameTooShortDTO(): this is IPresentNameTooShortDTO {
		return false;
	}

	public isPresentNameTooLongDTO(): this is IPresentNameTooLongDTO {
		return true;
	}
}
