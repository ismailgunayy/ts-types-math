export type Num<
	N extends number,
	Result extends unknown[] = []
> = Result["length"] extends N ? Result : Num<N, [...Result, unknown]>;
