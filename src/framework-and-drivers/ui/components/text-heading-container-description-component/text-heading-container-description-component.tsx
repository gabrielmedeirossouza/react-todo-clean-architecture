import "./text-heading-container-description-component.scss";

interface ITextHeadingContainerDescriptionComponentProps {
	text: string;
}

export function TextHeadingContainerDescriptionComponent({ text }: ITextHeadingContainerDescriptionComponentProps) {
	return <h3 className="text-heading-container-description-component">{text}</h3>;
}
