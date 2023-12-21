import { Result } from "@/shared/result";
import { ITodoValidationService } from "../interfaces/todo";
import { INameTooLongDTO, INameTooShortDTO } from "../interfaces/dtos";
import { NameTooLongDTO, NameTooShortDTO } from "../dtos";

export class TodoValidationService implements ITodoValidationService {
	public readonly TITLE_MIN_LENGTH = 3;
	public readonly TITLE_MAX_LENGTH = 20;
	public readonly DESCRIPTION_MIN_LENGTH = 10;
	public readonly DESCRIPTION_MAX_LENGTH = 50;

	public validateTitleTooShort(title: string): Result<void, INameTooShortDTO> {
		if (title.length >= this.TITLE_MIN_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooShortDTO("title", title, this.TITLE_MIN_LENGTH));
	}

	public validateTitleTooLong(title: string): Result<void, INameTooLongDTO> {
		if (title.length <= this.TITLE_MAX_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooLongDTO("title", title, this.TITLE_MAX_LENGTH));
	}

	public validateDescriptionTooShort(description: string): Result<void, INameTooShortDTO> {
		if (description.length >= this.DESCRIPTION_MIN_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooShortDTO("description", description, this.DESCRIPTION_MIN_LENGTH));
	}

	public validateDescriptionTooLong(description: string): Result<void, INameTooLongDTO> {
		if (description.length <= this.DESCRIPTION_MAX_LENGTH) return Result.ok(undefined);

		return Result.fail(new NameTooLongDTO("description", description, this.DESCRIPTION_MAX_LENGTH));
	}
}
