import { IPresentField } from "./present-field";
import { IPresentMessage } from "./present-message";

export interface IPresentNameTooLong extends IPresentField, IPresentMessage {
	readonly currentLength: number;
	readonly maxLength: number;
	readonly value: string;
}
