type Calculate<A extends unknown[]> = A["length"];

type AddOp<A extends unknown[], B extends unknown[]> = [...A, ...B];

export type Add<A extends unknown[], B extends unknown[]> = Calculate<
	AddOp<A, B>
>;

type SubtractOp<A extends unknown[], B extends unknown[]> = B extends []
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
> = B extends []
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
> = A extends []
	? Result
	: Subtract<A, B> extends never
	? Result
	: DivideOp<SubtractOp<A, B>, B, [unknown, ...Result]>;

export type Divide<A extends unknown[], B extends unknown[]> = Calculate<
	DivideOp<A, B>
>;
