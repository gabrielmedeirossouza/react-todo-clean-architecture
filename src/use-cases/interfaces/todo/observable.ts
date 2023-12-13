type TEvent = `on-${string}`;
type TCallback = (data: any) => void;

interface IObserver<T extends TEvent, K extends TCallback> {
	event: T;
	observer: K;
}

export interface IObservable {
	readonly observers: IObserver<TEvent, TCallback>[];
	attach(observer: IObserver<TEvent, TCallback>): void;
	detach(observer: IObserver<TEvent, TCallback>): void;
	notify(event: TEvent, data: any): void;
}
