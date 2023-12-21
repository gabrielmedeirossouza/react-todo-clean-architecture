import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";


export class NameTooLongSuccessDTO implements INameTooLongSuccessDTO {
	public readonly currentLength: number;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
	}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
	}

	public isNameTooShortSuccessDTO(): this is INameTooShortSuccessDTO {
		return false;
	}

	public isNameTooShortErrorDTO(): this is INameTooShortErrorDTO {
		return false;
	}

	public isNameTooLongSuccessDTO(): this is INameTooLongSuccessDTO {
		return true;
	}

	public isNameTooLongErrorDTO(): this is INameTooLongErrorDTO {
		return false;
	}
}
