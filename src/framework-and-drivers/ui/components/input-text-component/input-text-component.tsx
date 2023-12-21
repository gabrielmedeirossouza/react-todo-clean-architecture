interface IInputTextComponentProps {
	value: string;
	onChange: (value: string) => void;
}

export function InputTextComponent({ value, onChange }: IInputTextComponentProps) {
	return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
}
