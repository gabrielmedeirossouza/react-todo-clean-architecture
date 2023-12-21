import { Result } from "@/shared/result";
import { INameTooLongErrorDTO, INameTooShortErrorDTO } from "../dtos";

export interface ITodoValidationService {
	readonly TITLE_MIN_LENGTH: number;
	readonly TITLE_MAX_LENGTH: number;
	readonly DESCRIPTION_MIN_LENGTH: number;
	readonly DESCRIPTION_MAX_LENGTH: number;
	validateTitleTooShort(title: string): Result<void, INameTooShortErrorDTO>;
	validateTitleTooLong(title: string): Result<void, INameTooLongErrorDTO>;
	validateDescriptionTooShort(description: string): Result<void, INameTooShortErrorDTO>;
	validateDescriptionTooLong(description: string): Result<void, INameTooLongErrorDTO>;
}
