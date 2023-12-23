import "./text-status-warning-component.scss";

interface ITextProps {
	text: string;
}

export function TextStatusWarningComponent({ text }: ITextProps) {
	return <p className="text-status-warning-component">{text}</p>;
}
