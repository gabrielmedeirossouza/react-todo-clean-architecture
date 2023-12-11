import { ITodoValidationService } from "../interfaces/todo";

export class TodoValidationService implements ITodoValidationService {
	public readonly TITLE_MIN_LENGTH = 3;
	public readonly TITLE_MAX_LENGTH = 20;
	public readonly DESCRIPTION_MIN_LENGTH = 10;
	public readonly DESCRIPTION_MAX_LENGTH = 50;

	public validateTitleTooShort(title: string): boolean {
		return title.length >= this.TITLE_MIN_LENGTH;
	}

	public validateTitleTooLong(title: string): boolean {
		return title.length <= this.TITLE_MAX_LENGTH;
	}

	public validateDescriptionTooShort(description: string): boolean {
		return description.length >= this.DESCRIPTION_MIN_LENGTH;
	}

	public validateDescriptionTooLong(description: string): boolean {
		return description.length <= this.DESCRIPTION_MAX_LENGTH;
	}
}
