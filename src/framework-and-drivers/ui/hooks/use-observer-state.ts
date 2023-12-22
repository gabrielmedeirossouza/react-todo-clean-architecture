import { IObservable } from "@/interface-adapters/interfaces/observable";
import { useEffect, useState } from "react";

type TObservableArgument<T> = T extends IObservable<infer U> ? U : never;

export function useObserverState<T extends IObservable<any>>(observable: T | undefined) {
	const [state, setState] = useState<TObservableArgument<T>>();

	useEffect(() => {
		if (!observable) return;
		const observer = (data: TObservableArgument<T>) => {
			setState(data);
		};

		observable.subscribe(observer);

		return () => {
			observable.unsubscribe(observer);
		};
	}, [observable]);

	return state;
}
