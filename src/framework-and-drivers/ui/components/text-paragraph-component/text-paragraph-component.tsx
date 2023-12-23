import "./text-paragraph-component.scss";

interface ITextParagraphComponentProps {
	text: string;
}

export function TextParagraphComponent({ text }: ITextParagraphComponentProps) {
	return <p className="text-paragraph-component">{text}</p>;
}
