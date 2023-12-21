import { IPresentFieldDTO, IPresentMessageDTO, IPresentNameTooLongDTO, IPresentNameTooShortDTO } from ".";

export interface IPresentBaseDTO {
	isPresentFieldDTO(): this is IPresentFieldDTO;
	isPresentMessageDTO(): this is IPresentMessageDTO;
	isPresentNameTooLongDTO(): this is IPresentNameTooLongDTO;
	isPresentNameTooShortDTO(): this is IPresentNameTooShortDTO;
}
