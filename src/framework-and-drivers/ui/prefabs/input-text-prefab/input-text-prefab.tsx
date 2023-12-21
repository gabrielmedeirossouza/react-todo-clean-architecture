import { IPresentBaseDTO, IPresentFieldDTO } from "@/interface-adapters/interfaces/dtos";
import { IObservable } from "@/interface-adapters/interfaces/observable";
import { Result } from "@/shared/result";
import { useState } from "react";
import { useObserver } from "../../hooks";
import { InputTextComponent } from "../../components/input-text-component";
import { ErrorMessageComponent } from "../../components/error-message-component";

interface IInputTextPrefabProps {
	name: string;
	label?: string;
	value?: string;
	onChange?: (value: string) => void;
	error?: IObservable<Result<IPresentFieldDTO, IPresentBaseDTO>>;
}

export function InputTextPrefab({ name, label, value, onChange, error }: IInputTextPrefabProps) {
	const [errorMessage, setErrorMessage] = useState("");

	useObserver(error, (result) => {
		if (!result.ok && result.failValue.isPresentFieldDTO() && result.failValue.isPresentMessageDTO() && result.failValue.field === name) {
			setErrorMessage(result.failValue.message);
		}

		if (result.ok && result.okValue.isPresentFieldDTO() && result.okValue.field === name) {
			setErrorMessage("");
		}
	});

	return (
		<div>
			<label>
				{label}
				<InputTextComponent value={value ?? ""} onChange={onChange ?? (() => undefined)} />
			</label>
			<ErrorMessageComponent message={errorMessage} />
		</div>
	);
}
