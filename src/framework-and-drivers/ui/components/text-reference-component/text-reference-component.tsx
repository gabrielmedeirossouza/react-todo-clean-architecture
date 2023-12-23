import "./text-reference-component.scss";

interface ITextProps {
	text: string;
}

export function TextReferenceComponent({ text }: ITextProps) {
	return <p className="text-reference-component">{text}</p>;
}
