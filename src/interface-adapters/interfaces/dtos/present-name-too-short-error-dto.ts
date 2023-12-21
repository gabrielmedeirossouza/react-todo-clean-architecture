import { IPresentFieldDTO, IPresentMessageDTO } from ".";

export interface IPresentNameTooShortErrorDTO extends IPresentFieldDTO, IPresentMessageDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
