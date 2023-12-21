import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNameTooShortDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
