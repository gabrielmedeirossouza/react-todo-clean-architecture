import "./container-shape-component.scss";

interface IContainerShapeComponentProps {
	children: React.ReactNode;
}

export function ContainerShapeComponent({ children }: IContainerShapeComponentProps) {
	return <div className="container-shape-component">{children}</div>;
}
