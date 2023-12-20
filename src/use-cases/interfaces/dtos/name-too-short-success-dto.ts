import { IFieldDTO } from "./field-dto";

export interface INameTooShortSuccessDTO extends IFieldDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
