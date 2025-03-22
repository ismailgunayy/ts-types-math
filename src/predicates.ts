import { Num } from "./number";
import { Mod } from "./operations";

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

export type GreaterThanOrEqual<
	A extends unknown[],
	B extends unknown[]
> = IsEqual<A, B> extends true
	? true
	: GreaterThan<A, B> extends true
	? true
	: false;

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

export type LessThanOrEqual<A extends unknown[], B extends unknown[]> = IsEqual<
	A,
	B
> extends true
	? true
	: LessThan<A, B> extends true
	? true
	: false;

export type IsZero<A extends unknown[]> = A extends [] ? true : false;

export type IsEven<A extends unknown[]> = Mod<A, Num<2>> extends 0
	? true
	: false;

export type IsOdd<A extends unknown[]> = Mod<A, Num<2>> extends 1
	? true
	: false;

export type IsInRange<
	A extends unknown[],
	RangeStart extends unknown[],
	RangeEnd extends unknown[]
> = GreaterThanOrEqual<A, RangeStart> extends true
	? LessThanOrEqual<A, RangeEnd> extends true
		? true
		: false
	: false;
