import { IPresentField } from "./present-field";
import { IPresentMessage } from "./present-message";

export interface IPresentNameTooShort extends IPresentField, IPresentMessage {
	readonly currentLength: number;
	readonly minLength: number;
	readonly value: string;
}
