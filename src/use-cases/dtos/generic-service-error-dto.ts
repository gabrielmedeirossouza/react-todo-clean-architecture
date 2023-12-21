import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";

export class GenericServiceErrorDTO implements IMessageDTO {
	public readonly message = "Generic service error";

	public isFieldDTO(): this is IFieldDTO {
		return false;
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
		return false;
	}
}
