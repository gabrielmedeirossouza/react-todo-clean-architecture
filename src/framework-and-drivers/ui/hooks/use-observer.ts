import { IObservable } from "@/interface-adapters/interfaces/observable";
import { useEffect } from "react";

type TObservableArgument<T> = T extends IObservable<infer U> ? U : never;

export function useObserver<T extends IObservable<any>, J extends (data: TObservableArgument<T>) => void>(observable: T | undefined, observer: J) {
	useEffect(() => {
		if (!observable) return;
		observable.subscribe(observer);

		return () => {
			observable.unsubscribe(observer);
		};
	}, [observable, observer]);
}
