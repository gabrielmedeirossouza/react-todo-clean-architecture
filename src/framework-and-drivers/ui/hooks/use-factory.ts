import { useMemo } from "react";

export function useFactory<T>(fn: () => T) {
	const memoizedData = useMemo(() => fn(), []);

	return memoizedData;
}
