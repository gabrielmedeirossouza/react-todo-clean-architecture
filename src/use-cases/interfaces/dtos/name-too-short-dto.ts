import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface INameTooShortDTO extends IFieldDTO, IMessageDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
