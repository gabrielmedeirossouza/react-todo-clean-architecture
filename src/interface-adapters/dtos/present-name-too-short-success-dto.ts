import { IPresentNameTooShortSuccessDTO } from "../interfaces/dtos";

export class PresentNameTooShortSuccessDTO implements IPresentNameTooShortSuccessDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly minLength: number
	) {
		this.currentLength = value.length;
	}
}
