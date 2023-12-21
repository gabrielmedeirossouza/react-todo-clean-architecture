import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNameTooLongErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
