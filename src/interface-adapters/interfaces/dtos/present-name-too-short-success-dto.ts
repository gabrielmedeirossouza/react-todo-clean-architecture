import { IFieldDTO } from "@/use-cases/interfaces/dtos";

export interface IPresentNameTooShortSuccessDTO extends IFieldDTO {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
