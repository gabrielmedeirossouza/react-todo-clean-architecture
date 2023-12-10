import { FieldValidationErrorProtocol } from "../protocols/field-validation-error-protocol";

export class TodoDescriptionFieldValidationError extends FieldValidationErrorProtocol {
	public readonly field = "DESCRIPTION";

	constructor(
		public readonly message: string
	) {
		super();
	}
}
