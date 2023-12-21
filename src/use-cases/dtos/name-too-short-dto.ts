import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from "../interfaces/dtos";


export class NameTooShortDTO implements INameTooShortDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooShort: field ${this.field} is too short. Min length ${this.minLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
	}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
	}

	public isNameTooShortDTO(): this is INameTooShortDTO {
		return true;
	}

	public isNameTooLongDTO(): this is INameTooLongDTO {
		return false;
	}
}
