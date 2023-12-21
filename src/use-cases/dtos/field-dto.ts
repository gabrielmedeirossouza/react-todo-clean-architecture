import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";

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
		return false;
	}
}
