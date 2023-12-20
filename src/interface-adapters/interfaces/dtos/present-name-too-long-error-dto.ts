import { IPresentFieldDTO } from "./present-field-dto";
import { IPresentMessageDTO } from "./present-message-dto";

export interface IPresentNameTooLongErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
