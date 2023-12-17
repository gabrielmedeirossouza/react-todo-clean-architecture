import { IPresentNameTooShort } from "../interfaces/present-name-too-short";

export class PresentNameTooShortError implements IPresentNameTooShort {
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
