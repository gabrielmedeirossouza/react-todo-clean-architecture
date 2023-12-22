import { IObservable } from "../observable";

type TRules = {
	titleMinLength: number;
	titleMaxLength: number;
	descriptionMinLength: number;
	descriptionMaxLength: number;
}

export interface IGetCreateTodoValidationRulesViewModel {
	rules: IObservable<TRules>;
}
