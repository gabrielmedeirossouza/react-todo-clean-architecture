import { INameTooShortErrorDTO } from "../interfaces/dtos";

export class NameTooShortErrorDTO implements INameTooShortErrorDTO {
	public readonly currentLength: number;
	public readonly message: string;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
		this.message =
			`NameTooShortError: field ${this.field} is too short. Min length ${this.minLength}. Current length: ${this.currentLength}. Provided value: ${this.value}`;
	}
}
