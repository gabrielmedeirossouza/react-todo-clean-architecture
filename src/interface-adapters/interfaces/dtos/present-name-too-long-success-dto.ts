import { IPresentFieldDTO } from ".";

export interface IPresentNameTooLongSuccessDTO extends IPresentFieldDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
