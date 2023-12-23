import "./text-status-success-component.scss";

interface ITextProps {
	text: string;
}

export function TextStatusSuccessComponent({ text }: ITextProps) {
	return <p className="text-status-success-component">{text}</p>;
}
