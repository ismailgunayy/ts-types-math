import { Num } from "./number";
import {
	Add,
	Divide,
	Factorial,
	Mod,
	Multiply,
	Power,
	Subtract,
} from "./operations";
import {
	GreaterThan,
	GreaterThanOrEqual,
	IsEqual,
	IsEven,
	IsInRange,
	IsOdd,
	IsZero,
	LessThan,
	LessThanOrEqual,
} from "./predicates";

/**
 * OPERATIONS
 */

// Addition
type _4Plus4 = Add<Num<4>, Num<4>>; // 8
type _999Plus999 = Add<Num<999>, Num<999>>; // 1998
type _0Plus0 = Add<Num<0>, Num<0>>; // 0

// Subtraction
type _4Minus4 = Subtract<Num<4>, Num<4>>; // 0
type _8Minus3 = Subtract<Num<8>, Num<3>>; // 5

// Multiplication
type _4Times4 = Multiply<Num<4>, Num<4>>; // 16
type _5Times0 = Multiply<Num<5>, Num<0>>; // 0
type _99Times101 = Multiply<Num<99>, Num<101>>; // 9999

// Division
type _3Over0 = Divide<Num<3>, Num<0>>; // never
type _4Over4 = Divide<Num<4>, Num<4>>; // 1
type _9Over4 = Divide<Num<9>, Num<4>>; // 2
type _0Over4 = Divide<Num<0>, Num<4>>; // 0

// Power
type _0ToThe0th = Power<Num<0>, Num<0>>; // never
type _0ToThe5th = Power<Num<0>, Num<5>>; // 0
type _6ToThe0th = Power<Num<6>, Num<0>>; // 1
type _3ToThe4th = Power<Num<3>, Num<4>>; // 81

// Mod
type _1Mod0 = Mod<Num<1>, Num<0>>; // never
type _10Mod3 = Mod<Num<10>, Num<3>>; // 1
type _21Mod7 = Mod<Num<21>, Num<7>>; // 0

// Factorial
type _0Factorial = Factorial<Num<0>>; // 1
type _1Factorial = Factorial<Num<1>>; // 1
type _5Factorial = Factorial<Num<5>>; // 120

/**
 * PREDICATES
 */

// IsEqual
type _4Equals4 = IsEqual<Num<4>, Num<4>>; // true
type _4Equals5 = IsEqual<Num<4>, Num<5>>; // false

// GreaterThan
type _5GreaterThan3 = GreaterThan<Num<5>, Num<3>>; // true
type _3GreaterThan5 = GreaterThan<Num<3>, Num<5>>; // false
type _5GreaterThan5 = GreaterThan<Num<5>, Num<5>>; // false

// GreaterThanOrEqual
type _5GEQ3 = GreaterThanOrEqual<Num<5>, Num<3>>; // true
type _5GEQ5 = GreaterThanOrEqual<Num<5>, Num<5>>; // true
type _3GEQ5 = GreaterThanOrEqual<Num<3>, Num<5>>; // false

// LessThan
type _3LessThan5 = LessThan<Num<3>, Num<5>>; // true
type _5LessThan3 = LessThan<Num<5>, Num<3>>; // false
type _5LessThan5 = LessThan<Num<5>, Num<5>>; // false

// LessThanOrEqual
type _3LEQ5 = LessThanOrEqual<Num<3>, Num<5>>; // true
type _5LEQ5 = LessThanOrEqual<Num<5>, Num<5>>; // true
type _7LEQ5 = LessThanOrEqual<Num<7>, Num<5>>; // false

// IsZero
type _0IsZero = IsZero<Num<0>>; // true
type _5IsZero = IsZero<Num<5>>; // false

// IsEven
type _0IsEven = IsEven<Num<0>>; // true
type _2IsEven = IsEven<Num<2>>; // true
type _3IsEven = IsEven<Num<3>>; // false

// IsOdd
type _3IsOdd = IsOdd<Num<3>>; // true
type _4IsOdd = IsOdd<Num<4>>; // false

// IsInRange
type _5InRange3to10 = IsInRange<Num<5>, Num<3>, Num<10>>; // true
type _5InRange5to10 = IsInRange<Num<5>, Num<5>, Num<10>>; // true
type _5InRange0to5 = IsInRange<Num<5>, Num<0>, Num<5>>; // true
type _5InRange10to20 = IsInRange<Num<5>, Num<10>, Num<20>>; // false
