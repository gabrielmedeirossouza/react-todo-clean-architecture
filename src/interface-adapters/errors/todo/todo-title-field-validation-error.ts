import { FieldValidationErrorProtocol } from "../protocols/field-validation-error-protocol";

export class TodoTitleFieldValidationError extends FieldValidationErrorProtocol {
	public readonly field = "TITLE";

	constructor(
		public readonly message: string
	) {
		super();
	}
}
