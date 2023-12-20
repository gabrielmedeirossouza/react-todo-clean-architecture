import { IFieldDTO } from "./field-dto";

export interface INameTooLongSuccessDTO extends IFieldDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
