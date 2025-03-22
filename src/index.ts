import { GreaterThan, IsEqual, LessThan } from "./predicates";
import { Num } from "./number";
import { Add, Divide, Mod, Multiply, Power, Subtract } from "./operations";

/**
 * OPERATIONS
 */

// Addition
type _4Plus4 = Add<Num<4>, Num<4>>; // Inferred as 8
type _999Plus999 = Add<Num<999>, Num<999>>; // Inferred as 1998
type _0Plus0 = Add<Num<0>, Num<0>>; // Inferred as 0

// Subtraction
type _4Minus4 = Subtract<Num<4>, Num<4>>; // Inferred as 0
type _8Minus3 = Subtract<Num<8>, Num<3>>; // Inferred as 5

// Multiplication
type _4Times4 = Multiply<Num<4>, Num<4>>; // Inferred as 16
type _5Times0 = Multiply<Num<5>, Num<0>>; // Inferred as 0
type _99Times101 = Multiply<Num<99>, Num<101>>; // Inferred as 9999

// Division
type _3Over0 = Divide<Num<3>, Num<0>>; // Inferred as never
type _4Over4 = Divide<Num<4>, Num<4>>; // Inferred as 1
type _9Over4 = Divide<Num<9>, Num<4>>; // Inferred as 2
type _0Over4 = Divide<Num<0>, Num<4>>; // Inferred as 0

// Power
type _0ToThe0th = Power<Num<0>, Num<0>>; // Inferred as never
type _0ToThe5th = Power<Num<0>, Num<5>>; // Inferred as 0
type _6ToThe0th = Power<Num<6>, Num<0>>; // Inferred as 1
type _3ToThe4th = Power<Num<3>, Num<4>>; // Inferred as 81

// Mod
type _1Mod0 = Mod<Num<1>, Num<0>>; // Inferred as never
type _10Mod3 = Mod<Num<10>, Num<3>>; // Inferred as 1
type _21Mod7 = Mod<Num<21>, Num<7>>; // Inferred as 0

/**
 * PREDICATES
 */

// IsEqual
type _4Equals4 = IsEqual<Num<4>, Num<4>>; // Inferred as true

// GreaterThan
type _5GreaterThan3 = GreaterThan<Num<5>, Num<3>>; // Inferred as true

// LessThan
type _3LessThan5 = LessThan<Num<3>, Num<5>>; // Inferred as true
