import { IPresentNameTooLongErrorDTO } from "../interfaces/dtos";

export class PresentNameTooLongErrorDTO implements IPresentNameTooLongErrorDTO {
	public readonly currentLength: number;

	constructor(
		public readonly field: string,
		public readonly value: string,
		public readonly message: string,
		public readonly maxLength: number
	) {
		this.currentLength = value.length;
	}
}
