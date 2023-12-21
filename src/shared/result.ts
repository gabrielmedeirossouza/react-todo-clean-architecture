type Ok<T> = {
	ok: true,
	okValue: T
};

type Fail<K> = {
	ok: false,
	failValue: K
};

export type Result<T, K> = Ok<T> | Fail<K>;

export const Result = {
	ok<T>(okValue: T): Result<T, never> {
		return {
			ok: true,
			okValue
		};
	},
	fail<K>(failValue: K): Result<never, K> {
		return {
			ok: false,
			failValue
		};
	}
};
