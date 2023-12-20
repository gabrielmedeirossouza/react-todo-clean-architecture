import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface INameTooShortErrorDTO extends IFieldDTO, IMessageDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
