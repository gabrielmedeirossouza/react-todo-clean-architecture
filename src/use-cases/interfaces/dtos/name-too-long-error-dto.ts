import { IFieldDTO } from "./field-dto";
import { IMessageDTO } from "./message-dto";

export interface INameTooLongErrorDTO extends IFieldDTO, IMessageDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
