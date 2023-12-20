import { INameTooLongSuccessDTO } from "../interfaces/dtos";

export class NameTooLongSuccessDTO implements INameTooLongSuccessDTO {
	public readonly currentLength: number;

	constructor(
				public readonly field: string,
				public readonly value: string,
				public readonly maxLength: number
	) {
		this.currentLength = value.length;
	}
}
