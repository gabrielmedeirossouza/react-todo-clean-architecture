import "./text-paragraph-component.scss";

interface ITextProps {
	text: string;
}

export function TextParagraphComponent({ text }: ITextProps) {
	return <p className="text-paragraph-component">{text}</p>;
}
