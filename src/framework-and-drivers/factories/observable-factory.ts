import { IObservable } from "@/interface-adapters/interfaces/observable";
import { Result } from "@/shared/result";

export function observableFactory<T>(): IObservable<T> {
	const observers: ((data: T) => void)[] = [];

	return {
		subscribe(observer): Result<void, string> {
			const isAlreadyRegistered = observers.some((registeredObserver) => registeredObserver === observer);
			if (isAlreadyRegistered) return Result.fail("Observable: Trying to subscribe an already existing observer");

			observers.push(observer);

			return Result.ok(undefined);
		},
		unsubscribe(observer): Result<void, string> {
			const index = observers.findIndex((registeredObserver) => registeredObserver === observer);
			if (index === -1) return Result.fail("Observable: Trying to unsubscribe a non existing observer");

			observers.splice(index, 1);
			return Result.ok(undefined);
		},
		notify(data): void {
			observers.forEach((observer) => observer(data));
		}
	};
}
