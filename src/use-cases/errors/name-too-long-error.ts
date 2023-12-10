export class NameTooLongError {
	constructor(
				public readonly value: string,
				public readonly maxLength: number
	) {}
}
