import { IFieldDTO, IMessageDTO, INameTooLongErrorDTO, INameTooLongSuccessDTO, INameTooShortErrorDTO, INameTooShortSuccessDTO } from ".";

export interface IBaseDTO {
	isFieldDTO(): this is IFieldDTO;
	isMessageDTO(): this is IMessageDTO;
	isNameTooLongSuccessDTO(): this is INameTooLongSuccessDTO;
	isNameTooLongErrorDTO(): this is INameTooLongErrorDTO;
	isNameTooShortSuccessDTO(): this is INameTooShortSuccessDTO;
	isNameTooShortErrorDTO(): this is INameTooShortErrorDTO;
}
