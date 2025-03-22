export type IsEqual<A extends unknown[], B extends unknown[]> = A extends B
	? B extends A
		? true
		: false
	: false;

export type GreaterThan<A extends unknown[], B extends unknown[]> = IsEqual<
	A,
	B
> extends true
	? false
	: A extends []
	? false
	: B extends []
	? true
	: A extends [unknown, ...infer RestA]
	? B extends [unknown, ...infer RestB]
		? GreaterThan<RestA, RestB>
		: never
	: never;

export type LessThan<A extends unknown[], B extends unknown[]> = IsEqual<
	A,
	B
> extends true
	? false
	: A extends []
	? true
	: B extends []
	? false
	: A extends [unknown, ...infer RestA]
	? B extends [unknown, ...infer RestB]
		? LessThan<RestA, RestB>
		: never
	: never;
