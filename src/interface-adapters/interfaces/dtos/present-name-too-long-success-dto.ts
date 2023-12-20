import { IFieldDTO } from "@/use-cases/interfaces/dtos";

export interface IPresentNameTooLongSuccessDTO extends IFieldDTO {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
