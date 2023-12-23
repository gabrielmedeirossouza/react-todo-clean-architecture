import "./container-shape-component.scss";

interface IContainerShapeProps {
	children: React.ReactNode;
}

export function ContainerShapeComponent({ children }: IContainerShapeProps) {
	return <div className="container-shape-component">{children}</div>;
}
