import { IMessageDTO } from "../interfaces/dtos";

export class GenericServiceErrorDTO implements IMessageDTO {
	public readonly message = "Generic service error";
}
