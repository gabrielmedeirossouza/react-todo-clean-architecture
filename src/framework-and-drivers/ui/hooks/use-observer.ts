import { IObservable } from "@/interface-adapters/interfaces/observable";
import { useEffect } from "react";

export function useObserver<T extends IObservable<any>, J extends (data: any) => void>(observable: T, observer: J) {
	useEffect(() => {
		observable.subscribe(observer);

		return () => {
			observable.unsubscribe(observer);
		};
	}, [observable, observer]);
}
