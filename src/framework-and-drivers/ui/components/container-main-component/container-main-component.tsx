import "./container-main-component.scss";

interface IContainerMainComponentProps {
	children: React.ReactNode;
}

export function ContainerMainComponent({ children }: IContainerMainComponentProps) {
	return <main className="container-main-component">{children}</main>;
}
