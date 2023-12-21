import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongErrorDTO, IPresentNameTooLongSuccessDTO, IPresentNameTooShortErrorDTO, IPresentNameTooShortSuccessDTO } from ".";

export interface IPresentBaseDTO {
	isPresentFieldDTO(): this is IPresentFieldDTO;
	isPresentMessageDTO(): this is IPresentMessageDTO;
	isPresentNameTooLongSuccessDTO(): this is IPresentNameTooLongSuccessDTO;
	isPresentNameTooLongErrorDTO(): this is IPresentNameTooLongErrorDTO;
	isPresentNameTooShortSuccessDTO(): this is IPresentNameTooShortSuccessDTO;
	isPresentNameTooShortErrorDTO(): this is IPresentNameTooShortErrorDTO;
}
