import { Num } from "./number";
import { Mod } from "./operations";

export type Equal<X extends unknown[], Y extends unknown[]> = X extends Y
	? Y extends X
		? true
		: false
	: false;

export type GreaterThan<X extends unknown[], Y extends unknown[]> = Equal<
	X,
	Y
> extends true
	? false
	: X extends []
	? false
	: Y extends []
	? true
	: X extends [unknown, ...infer RestX]
	? Y extends [unknown, ...infer RestY]
		? GreaterThan<RestX, RestY>
		: never
	: never;

export type GreaterThanOrEqual<
	X extends unknown[],
	Y extends unknown[]
> = Equal<X, Y> extends true
	? true
	: GreaterThan<X, Y> extends true
	? true
	: false;

export type LessThan<X extends unknown[], Y extends unknown[]> = Equal<
	X,
	Y
> extends true
	? false
	: X extends []
	? true
	: Y extends []
	? false
	: X extends [unknown, ...infer RestX]
	? Y extends [unknown, ...infer RestY]
		? LessThan<RestX, RestY>
		: never
	: never;

export type LessThanOrEqual<X extends unknown[], Y extends unknown[]> = Equal<
	X,
	Y
> extends true
	? true
	: LessThan<X, Y> extends true
	? true
	: false;

export type Zero<X extends unknown[]> = X extends [] ? true : false;

export type Even<X extends unknown[]> = Mod<X, Num<2>> extends 0 ? true : false;

export type Odd<X extends unknown[]> = Mod<X, Num<2>> extends 1 ? true : false;

export type InRange<
	X extends unknown[],
	RangeStart extends unknown[],
	RangeEnd extends unknown[]
> = GreaterThanOrEqual<X, RangeStart> extends true
	? LessThanOrEqual<X, RangeEnd> extends true
		? true
		: false
	: false;
