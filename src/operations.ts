import { IsZero } from "./predicates";

type Calculate<X extends unknown[]> = X["length"];

type AddOp<X extends unknown[], Y extends unknown[]> = [...X, ...Y];

export type Add<X extends unknown[], Y extends unknown[]> = Calculate<
	AddOp<X, Y>
>;

type SubtractOp<
	X extends unknown[],
	Y extends unknown[]
> = IsZero<Y> extends true
	? X
	: X extends [unknown, ...infer RestX]
	? Y extends [unknown, ...infer RestY]
		? SubtractOp<RestX, RestY>
		: never
	: never;

export type Subtract<X extends unknown[], Y extends unknown[]> = Calculate<
	SubtractOp<X, Y>
>;

type MultiplyOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = []
> = IsZero<Y> extends true
	? Result
	: Y extends [unknown, ...infer RestY]
	? MultiplyOp<X, RestY, [...Result, ...X]>
	: never;

export type Multiply<X extends unknown[], Y extends unknown[]> = Calculate<
	MultiplyOp<X, Y>
>;

type DivideOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = []
> = IsZero<Y> extends true
	? never
	: IsZero<X> extends true
	? Result
	: SubtractOp<X, Y> extends never
	? Result
	: DivideOp<SubtractOp<X, Y>, Y, [unknown, ...Result]>;

export type Divide<X extends unknown[], Y extends unknown[]> = Calculate<
	DivideOp<X, Y>
>;

type PowerOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = [unknown]
> = IsZero<X> extends true
	? IsZero<Y> extends true
		? never
		: []
	: IsZero<Y> extends true
	? Result
	: Y extends [unknown, ...infer RestY]
	? PowerOp<X, RestY, MultiplyOp<Result, X>>
	: never;

export type Power<X extends unknown[], Y extends unknown[]> = Calculate<
	PowerOp<X, Y>
>;

type ModOp<X extends unknown[], Y extends unknown[]> = IsZero<Y> extends true
	? never
	: SubtractOp<X, Y> extends never
	? X
	: ModOp<SubtractOp<X, Y>, Y>;

export type Mod<X extends unknown[], Y extends unknown[]> = Calculate<
	ModOp<X, Y>
>;
