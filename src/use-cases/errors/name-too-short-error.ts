export class NameTooShortError {
	public readonly currentLength: number;

	constructor(
				public readonly value: string,
				public readonly minLength: number
	) {
		this.currentLength = value.length;
	}
}
