import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from "../interfaces/dtos";

export class FieldDTO implements IFieldDTO {
	constructor(
		public readonly field: string
	) {}

	public isFieldDTO(): this is IFieldDTO {
		return true;
	}

	public isMessageDTO(): this is IMessageDTO {
		return false;
	}

	public isNameTooShortDTO(): this is INameTooShortDTO {
		return false;
	}

	public isNameTooLongDTO(): this is INameTooLongDTO {
		return false;
	}
}
