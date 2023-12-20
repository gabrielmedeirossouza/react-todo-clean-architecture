import { IPresentFieldDTO } from "./present-field-dto";
import { IPresentMessageDTO } from "./present-message-dto";

export interface IPresentNameTooShortErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
