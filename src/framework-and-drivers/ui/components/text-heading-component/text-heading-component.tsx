import { useMemo } from "react";
import "./text-heading-component.scss";

interface ITextProps {
	text: string;
	level: "unique" | "container-name" | "container-description"
}

export function TextHeadingComponent({ text, level }: ITextProps) {
	function getTagNameByLevel(level: ITextProps["level"]) {
		const levelToTagNameMap = {
			"unique": "h1",
			"container-name": "h2",
			"container-description": "h3"
		} as const;

		return levelToTagNameMap[level];
	}

	const TagName = useMemo(() => getTagNameByLevel(level), [level]);

	return <TagName className={`text-heading-component ${level}`}>{text}</TagName>;
}
