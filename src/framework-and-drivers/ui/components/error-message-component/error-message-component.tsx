import "./error-message-component.scss";

interface IErrorMessageProps {
	message: string;
}

export function ErrorMessageComponent({ message }: IErrorMessageProps) {
	return <p className="error-message-component">{message}</p>;
}
