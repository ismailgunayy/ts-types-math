import { GreaterThan, LessThan, Zero } from "./predicates";

type ToNumber<X extends unknown[]> = X["length"];

type AddOp<X extends unknown[], Y extends unknown[]> = [...X, ...Y];

export type Add<X extends unknown[], Y extends unknown[]> = ToNumber<
	AddOp<X, Y>
>;

type SubtractOp<X extends unknown[], Y extends unknown[]> = Zero<Y> extends true
	? X
	: X extends [unknown, ...infer RestX]
	? Y extends [unknown, ...infer RestY]
		? SubtractOp<RestX, RestY>
		: never
	: never;

export type Subtract<X extends unknown[], Y extends unknown[]> = ToNumber<
	SubtractOp<X, Y>
>;

type MultiplyOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = []
> = Zero<Y> extends true
	? Result
	: Y extends [unknown, ...infer RestY]
	? MultiplyOp<X, RestY, [...Result, ...X]>
	: never;

export type Multiply<X extends unknown[], Y extends unknown[]> = ToNumber<
	MultiplyOp<X, Y>
>;

type DivideOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = []
> = Zero<Y> extends true
	? never
	: Zero<X> extends true
	? Result
	: SubtractOp<X, Y> extends never
	? Result
	: DivideOp<SubtractOp<X, Y>, Y, [unknown, ...Result]>;

export type Divide<X extends unknown[], Y extends unknown[]> = ToNumber<
	DivideOp<X, Y>
>;

type PowerOp<
	X extends unknown[],
	Y extends unknown[],
	Result extends unknown[] = [unknown]
> = Zero<X> extends true
	? Zero<Y> extends true
		? never
		: []
	: Zero<Y> extends true
	? Result
	: Y extends [unknown, ...infer RestY]
	? PowerOp<X, RestY, MultiplyOp<Result, X>>
	: never;

export type Power<X extends unknown[], Y extends unknown[]> = ToNumber<
	PowerOp<X, Y>
>;

type ModOp<X extends unknown[], Y extends unknown[]> = Zero<Y> extends true
	? never
	: SubtractOp<X, Y> extends never
	? X
	: ModOp<SubtractOp<X, Y>, Y>;

export type Mod<X extends unknown[], Y extends unknown[]> = ToNumber<
	ModOp<X, Y>
>;

type FactorialOp<
	X extends unknown[],
	Result extends unknown[] = [unknown]
> = Zero<X> extends true
	? Result
	: X extends [unknown, ...infer RestX]
	? FactorialOp<RestX, MultiplyOp<Result, X>>
	: never;

export type Factorial<X extends unknown[]> = ToNumber<FactorialOp<X>>;

type MinOp<X extends unknown[], Y extends unknown[]> = LessThan<
	X,
	Y
> extends true
	? X
	: Y;

export type Min<X extends unknown[], Y extends unknown[]> = ToNumber<
	MinOp<X, Y>
>;

type MaxOp<X extends unknown[], Y extends unknown[]> = GreaterThan<
	X,
	Y
> extends true
	? X
	: Y;

export type Max<X extends unknown[], Y extends unknown[]> = ToNumber<
	MaxOp<X, Y>
>;
