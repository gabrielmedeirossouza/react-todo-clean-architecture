export class NameTooShortError {
	constructor(
				public readonly value: string,
				public readonly minLength: number
	) {}
}
