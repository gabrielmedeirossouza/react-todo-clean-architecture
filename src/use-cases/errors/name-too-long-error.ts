export class NameTooLongError {
	public readonly currentLength: number;

	constructor(
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
	}
}
