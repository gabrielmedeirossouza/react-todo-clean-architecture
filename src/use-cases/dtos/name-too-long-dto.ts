import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from "../interfaces/dtos";


export class NameTooLongDTO implements INameTooLongDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooLong: field ${this.field} is too long. Max length ${this.maxLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
	}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
	}

	public isNameTooShortDTO(): this is INameTooShortDTO {
		return false;
	}

	public isNameTooLongDTO(): this is INameTooLongDTO {
		return true;
	}
}
