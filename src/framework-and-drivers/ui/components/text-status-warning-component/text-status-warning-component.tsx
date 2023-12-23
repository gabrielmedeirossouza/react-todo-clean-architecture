import "./text-status-warning-component.scss";

interface ITextStatusWarningComponentProps {
	text: string;
}

export function TextStatusWarningComponent({ text }: ITextStatusWarningComponentProps) {
	return <p className="text-status-warning-component">{text}</p>;
}
