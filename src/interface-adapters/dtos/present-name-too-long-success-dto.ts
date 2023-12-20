import { IPresentNameTooLongSuccessDTO } from "../interfaces/dtos";

export class PresentNameTooLongSuccessDTO implements IPresentNameTooLongSuccessDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly maxLength: number
	) {
		this.currentLength = value.length;
	}
}
