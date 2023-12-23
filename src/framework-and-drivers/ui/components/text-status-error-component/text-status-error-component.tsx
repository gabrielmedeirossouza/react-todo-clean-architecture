import "./text-status-error-component.scss";

interface ITextProps {
	text: string;
}

export function TextStatusErrorComponent({ text }: ITextProps) {
	return <p className="text-status-error-component">{text}</p>;
}
