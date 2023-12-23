import "./text-heading-container-name-component.scss";

interface ITextHeadingContainerNameComponentProps {
	text: string;
}

export function TextHeadingContainerNameComponent({ text }: ITextHeadingContainerNameComponentProps) {
	return <h2 className="text-heading-container-name-component">{text}</h2>;
}
