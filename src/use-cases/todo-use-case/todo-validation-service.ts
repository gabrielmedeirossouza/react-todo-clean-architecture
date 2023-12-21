import { Result } from "@/shared/result";
import { ITodoValidationService } from "../interfaces/todo";
import { INameTooLongErrorDTO, INameTooShortErrorDTO } from "../interfaces/dtos";
import { NameTooLongErrorDTO, NameTooShortErrorDTO } from "../dtos";

export class TodoValidationService implements ITodoValidationService {
	public readonly TITLE_MIN_LENGTH = 3;
	public readonly TITLE_MAX_LENGTH = 20;
	public readonly DESCRIPTION_MIN_LENGTH = 10;
	public readonly DESCRIPTION_MAX_LENGTH = 50;

	public validateTitleTooShort(title: string): Result<void, INameTooShortErrorDTO> {
		if (title.length >= this.TITLE_MIN_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooShortErrorDTO("title", title, this.TITLE_MIN_LENGTH));
	}

	public validateTitleTooLong(title: string): Result<void, INameTooLongErrorDTO> {
		if (title.length <= this.TITLE_MAX_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooLongErrorDTO("title", title, this.TITLE_MAX_LENGTH));
	}

	public validateDescriptionTooShort(description: string): Result<void, INameTooShortErrorDTO> {
		if (description.length >= this.DESCRIPTION_MIN_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooShortErrorDTO("description", description, this.DESCRIPTION_MIN_LENGTH));
	}

	public validateDescriptionTooLong(description: string): Result<void, INameTooLongErrorDTO> {
		if (description.length <= this.DESCRIPTION_MAX_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooLongErrorDTO("description", description, this.DESCRIPTION_MAX_LENGTH));
	}
}
