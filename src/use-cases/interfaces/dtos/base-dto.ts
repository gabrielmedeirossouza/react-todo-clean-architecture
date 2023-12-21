import { IFieldDTO, IMessageDTO, INameTooLongDTO, INameTooShortDTO } from ".";

export interface IBaseDTO {
	isFieldDTO(): this is IFieldDTO;
	isMessageDTO(): this is IMessageDTO;
	isNameTooLongDTO(): this is INameTooLongDTO;
	isNameTooShortDTO(): this is INameTooShortDTO;
}
