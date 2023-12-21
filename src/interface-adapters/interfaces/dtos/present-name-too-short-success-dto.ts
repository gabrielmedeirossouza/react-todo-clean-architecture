import { IPresentFieldDTO } from ".";

export interface IPresentNameTooShortSuccessDTO extends IPresentFieldDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
