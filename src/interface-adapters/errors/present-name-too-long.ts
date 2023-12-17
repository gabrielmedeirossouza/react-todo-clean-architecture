import { IPresentNameTooLong } from "../interfaces/present-name-too-long";

export class PresentNameTooLongError implements IPresentNameTooLong {
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
