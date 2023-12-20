import { Result } from "@/shared/result";
import { INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../dtos";

export interface ITodoValidationService {
	validateTitleTooShort(title: string): Result<INameTooShortSuccessDTO, INameTooShortErrorDTO>;
	validateTitleTooLong(title: string): Result<INameTooLongSuccessDTO, INameTooLongErrorDTO>;
	validateDescriptionTooShort(description: string): Result<INameTooShortSuccessDTO, INameTooShortErrorDTO>;
	validateDescriptionTooLong(description: string): Result<INameTooLongSuccessDTO, INameTooLongErrorDTO>;
}
