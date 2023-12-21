import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from "../interfaces/dtos";

export class GenericServiceDTO implements IMessageDTO {
	public readonly message = "Generic service error";

	public isFieldDTO(): this is IFieldDTO {
		return false;
	}

	public isMessageDTO(): this is IMessageDTO {
		return true;
	}

	public isNameTooShortDTO(): this is INameTooShortDTO {
		return false;
	}

	public isNameTooLongDTO(): this is INameTooLongDTO {
		return false;
	}
}
