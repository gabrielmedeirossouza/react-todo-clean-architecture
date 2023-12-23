import "./text-status-error-component.scss";

interface ITextStatusErrorComponentProps {
	text: string;
}

export function TextStatusErrorComponent({ text }: ITextStatusErrorComponentProps) {
	return <p className="text-status-error-component">{text}</p>;
}
