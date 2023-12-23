import "./container-main-component.scss";

interface IContainerMainProps {
	children: React.ReactNode;
}

export function ContainerMainComponent({ children }: IContainerMainProps) {
	return <main className="container-main-component">{children}</main>;
}
