export interface ITodoValidationService {
	readonly TITLE_MIN_LENGTH: number;
	readonly TITLE_MAX_LENGTH: number;
	readonly DESCRIPTION_MIN_LENGTH: number;
	readonly DESCRIPTION_MAX_LENGTH: number;
	validateTitleTooShort(title: string): boolean;
	validateTitleTooLong(title: string): boolean;
	validateDescriptionTooShort(description: string): boolean;
	validateDescriptionTooLong(description: string): boolean;
}
