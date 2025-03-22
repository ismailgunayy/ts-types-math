import { IsZero } from "./predicates";

type Calculate<A extends unknown[]> = A["length"];

type AddOp<A extends unknown[], B extends unknown[]> = [...A, ...B];

export type Add<A extends unknown[], B extends unknown[]> = Calculate<
	AddOp<A, B>
>;

type SubtractOp<
	A extends unknown[],
	B extends unknown[]
> = IsZero<B> extends true
	? A
	: A extends [unknown, ...infer RestA]
	? B extends [unknown, ...infer RestB]
		? SubtractOp<RestA, RestB>
		: never
	: never;

export type Subtract<A extends unknown[], B extends unknown[]> = Calculate<
	SubtractOp<A, B>
>;

type MultiplyOp<
	A extends unknown[],
	B extends unknown[],
	Result extends unknown[] = []
> = IsZero<B> extends true
	? Result
	: B extends [unknown, ...infer RestB]
	? MultiplyOp<A, RestB, [...Result, ...A]>
	: never;

export type Multiply<A extends unknown[], B extends unknown[]> = Calculate<
	MultiplyOp<A, B>
>;

type DivideOp<
	A extends unknown[],
	B extends unknown[],
	Result extends unknown[] = []
> = IsZero<B> extends true
	? never
	: IsZero<A> extends true
	? Result
	: SubtractOp<A, B> extends never
	? Result
	: DivideOp<SubtractOp<A, B>, B, [unknown, ...Result]>;

export type Divide<A extends unknown[], B extends unknown[]> = Calculate<
	DivideOp<A, B>
>;

type PowerOp<
	A extends unknown[],
	B extends unknown[],
	Result extends unknown[] = [unknown]
> = IsZero<A> extends true
	? IsZero<B> extends true
		? never
		: []
	: IsZero<B> extends true
	? Result
	: B extends [unknown, ...infer RestB]
	? PowerOp<A, RestB, MultiplyOp<Result, A>>
	: never;

export type Power<A extends unknown[], B extends unknown[]> = Calculate<
	PowerOp<A, B>
>;

type ModOp<A extends unknown[], B extends unknown[]> = IsZero<B> extends true
	? never
	: SubtractOp<A, B> extends never
	? A
	: ModOp<SubtractOp<A, B>, B>;

export type Mod<A extends unknown[], B extends unknown[]> = Calculate<
	ModOp<A, B>
>;
