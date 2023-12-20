import { IObservable } from "@/interface-adapters/interfaces/observable";
import { IPresentField } from "@/interface-adapters/interfaces/present-field";
import { IPresentMessage } from "@/interface-adapters/interfaces/present-message";
import { useObserver } from "../../hooks";
import { useState } from "react";

type TError = {
	onFill: IObservable<IPresentField & IPresentMessage>,
	onClear: IObservable<IPresentField>
}

interface IInputTextProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
	error?: TError
}

export function InputText({ name, value, onChange, error }: IInputTextProps) {
	const [errorMessage, setErrorMessage] = useState("");

	useObserver(error?.onFill, ({ field, message }) => {
		if (field === name) setErrorMessage(message);
	});

	useObserver(error?.onClear, ({ field }) => {
		if (field === name) setErrorMessage("");
	});

	return (
		<div>
			<input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
			{errorMessage && <p style={{color: "tomato"}}>{errorMessage}</p>}
		</div>
	);
}
