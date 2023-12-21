import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";


export class NameTooLongErrorDTO implements INameTooLongErrorDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooLongError: field ${this.field} is too long. Max length ${this.maxLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
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
		return false;
	}

	public isNameTooLongErrorDTO(): this is INameTooLongErrorDTO {
		return true;
	}
}
