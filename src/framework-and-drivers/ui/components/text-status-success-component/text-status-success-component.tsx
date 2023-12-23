import "./text-status-success-component.scss";

interface ITextStatusSuccessComponentProps {
	text: string;
}

export function TextStatusSuccessComponent({ text }: ITextStatusSuccessComponentProps) {
	return <p className="text-status-success-component">{text}</p>;
}
