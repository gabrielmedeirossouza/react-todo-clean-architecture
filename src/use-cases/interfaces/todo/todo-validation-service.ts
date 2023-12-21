import { Result } from "@/shared/result";
import { INameTooLongDTO, INameTooShortDTO } from "../dtos";

export interface ITodoValidationService {
	readonly TITLE_MIN_LENGTH: number;
	readonly TITLE_MAX_LENGTH: number;
	readonly DESCRIPTION_MIN_LENGTH: number;
	readonly DESCRIPTION_MAX_LENGTH: number;
	validateTitleTooShort(title: string): Result<void, INameTooShortDTO>;
	validateTitleTooLong(title: string): Result<void, INameTooLongDTO>;
	validateDescriptionTooShort(description: string): Result<void, INameTooShortDTO>;
	validateDescriptionTooLong(description: string): Result<void, INameTooLongDTO>;
}
