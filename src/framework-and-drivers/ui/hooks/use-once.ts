import { useMemo } from "react";

export function useOnce<T>(fn: () => T) {
	const memoizedData = useMemo(() => fn(), []);

	return memoizedData;
}
