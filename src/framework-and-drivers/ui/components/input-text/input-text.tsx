import { IPresentBaseDTO, IPresentFieldDTO } from "@/interface-adapters/interfaces/dtos";
import { IObservable } from "@/interface-adapters/interfaces/observable";
import { Result } from "@/shared/result";
import { useState } from "react";
import { useObserver } from "../../hooks";

interface IInputTextProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
	error?: IObservable<Result<IPresentFieldDTO, IPresentBaseDTO>>;
}

export function InputText({ name, value, onChange, error }: IInputTextProps) {
	const [errorMessage, setErrorMessage] = useState("");

	useObserver(error, (result) => {
		if (!result.ok && result.error.isPresentFieldDTO() && result.error.isPresentMessageDTO() && result.error.field === name) {
			setErrorMessage(result.error.message);
		}

		if (result.ok && result.value.isPresentFieldDTO() && result.value.field === name) {
			setErrorMessage("");
		}
	});

	return (
		<div>
			<input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
			{errorMessage && <p style={{color: "tomato"}}>{errorMessage}</p>}
		</div>
	);
}
