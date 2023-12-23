import "./text-heading-unique-component.scss";

interface ITextHeadingUniqueComponentProps {
	text: string;
}

export function TextHeadingUniqueComponent({ text }: ITextHeadingUniqueComponentProps) {
	return <h1 className="text-heading-unique-component">{text}</h1>;
}
