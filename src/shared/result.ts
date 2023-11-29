type Ok<T> = {
	ok: true,
	value: T
};

type Fail<K> = {
	ok: false,
	error: K
};

export type Result<T, K> = Ok<T> | Fail<K>;

export const Result = {
	ok<T>(value: T): Result<T, never> {
		return {
			ok: true,
			value
		};
	},
	fail<K>(error: K): Result<never, K> {
		return {
			ok: false,
			error
		};
	}
};
