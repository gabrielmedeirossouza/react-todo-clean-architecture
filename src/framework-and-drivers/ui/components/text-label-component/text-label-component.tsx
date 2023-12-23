import "./text-label-component.scss";

interface ITextLabelComponentProps {
	text: string;
	children: React.ReactNode;
}

export function TextLabelComponent({ text, children }: ITextLabelComponentProps) {
	return (
		<label className="text-label-component">
			{text}
			{children}
		</label>
	);
}
