import "./text-label-component.scss";

interface ITextProps {
	text: string;
	children: React.ReactNode;
}

export function TextLabelComponent({ text, children }: ITextProps) {
	return (
		<label className="text-label-component">
			{text}
			{children}
		</label>
	);
}
