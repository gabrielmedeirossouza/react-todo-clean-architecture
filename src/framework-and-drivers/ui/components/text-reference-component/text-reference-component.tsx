import "./text-reference-component.scss";

interface ITextReferenceComponentProps {
	text: string;
}

export function TextReferenceComponent({ text }: ITextReferenceComponentProps) {
	return <p className="text-reference-component">{text}</p>;
}
