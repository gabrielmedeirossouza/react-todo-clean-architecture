import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";


export class NameTooShortErrorDTO implements INameTooShortErrorDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooShortError: field ${this.field} is too short. Min length ${this.minLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
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
		return true;
	}

	public isNameTooLongSuccessDTO(): this is INameTooLongSuccessDTO {
		return false;
	}

	public isNameTooLongErrorDTO(): this is INameTooLongErrorDTO {
		return false;
	}
}
