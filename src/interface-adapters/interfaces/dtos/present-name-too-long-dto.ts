import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNameTooLongDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
