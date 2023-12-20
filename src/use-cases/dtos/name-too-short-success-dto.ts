import { INameTooShortSuccessDTO } from "../interfaces/dtos";

export class NameTooShortSuccessDTO implements INameTooShortSuccessDTO {
	public readonly currentLength: number;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
	}
}
