import { IPresentNameTooShortErrorDTO } from "../interfaces/dtos";

export class PresentNameTooShortErrorDTO implements IPresentNameTooShortErrorDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly message: string,
		public readonly minLength: number
	) {
		this.currentLength = value.length;
	}
}
