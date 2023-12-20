import { Result } from "@/shared/result";
import { ITodoValidationService } from "../interfaces/todo";
import { INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from "../interfaces/dtos";
import { NameTooLongErrorDTO, NameTooLongSuccessDTO, NameTooShortErrorDTO, NameTooShortSuccessDTO } from "../dtos";

export class TodoValidationService implements ITodoValidationService {
	private readonly _TITLE_MIN_LENGTH = 3;
	private readonly _TITLE_MAX_LENGTH = 20;
	private readonly _DESCRIPTION_MIN_LENGTH = 10;
	private readonly _DESCRIPTION_MAX_LENGTH = 50;

	public validateTitleTooShort(title: string): Result<INameTooShortSuccessDTO, INameTooShortErrorDTO> {
		if (title.length >= this._TITLE_MIN_LENGTH)
			return Result.ok(new NameTooShortSuccessDTO("title", title, this._TITLE_MIN_LENGTH));

		return Result.fail(new NameTooShortErrorDTO("title", title, this._TITLE_MIN_LENGTH));
	}

	public validateTitleTooLong(title: string): Result<INameTooLongSuccessDTO, INameTooLongErrorDTO> {
		if (title.length <= this._TITLE_MAX_LENGTH)
			return Result.ok(new NameTooLongSuccessDTO("title", title, this._TITLE_MAX_LENGTH));

		return Result.fail(new NameTooLongErrorDTO("title", title, this._TITLE_MAX_LENGTH));
	}

	public validateDescriptionTooShort(description: string): Result<INameTooShortSuccessDTO, INameTooShortErrorDTO> {
		if (description.length >= this._DESCRIPTION_MIN_LENGTH)
			return Result.ok(new NameTooShortSuccessDTO("description", description, this._DESCRIPTION_MIN_LENGTH));

		return Result.fail(new NameTooShortErrorDTO("description", description, this._DESCRIPTION_MIN_LENGTH));
	}

	public validateDescriptionTooLong(description: string): Result<INameTooLongSuccessDTO, INameTooLongErrorDTO> {
		if (description.length <= this._DESCRIPTION_MAX_LENGTH)
			return Result.ok(new NameTooLongSuccessDTO("description", description, this._DESCRIPTION_MAX_LENGTH));

		return Result.fail(new NameTooLongErrorDTO("description", description, this._DESCRIPTION_MAX_LENGTH));
	}
}
