import { INameTooLongErrorDTO } from "../interfaces/dtos";

export class NameTooLongErrorDTO implements INameTooLongErrorDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooLongError: field ${this.field} is too long. Max length ${this.maxLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
	}
}
