# TypeScript Type-Level Mathematics

X library that performs arithmetic operations purely within TypeScript's type system, with calculations happening only during type checking in the TypeScript Language Server.

## Limitations

- **Range Constraints**: Limited to numbers within the range of TypeScript's tuple length limit (currently 999)
- **Number Types**: Does not handle negative numbers or floating-point numbers

## Available Operations

- `Add<X, Y>`
- `Subtract<X, Y>`
- `Multiply<X, Y>`
- `Divide<X, Y>`
- `Power<X, Y>`
- `Mod<X, Y>`

## Available Predicates

- `IsEqual<X, Y>`
- `GreaterThan<X, Y>`
- `GreaterThanOrEqual<X, Y>`
- `LessThan<X, Y>`
- `LessThanOrEqual<X, Y>`
- `IsZero<X>`
- `IsEven<X>`
- `IsOdd<X>`
- `IsInRange<X, RangeStart, RangeEnd>`

## Examples

Here's what the TypeScript compiler infers for our examples:

```typescript
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
type _4Equals5 = IsEqual<Num<4>, Num<5>>; // Inferred as false

// GreaterThan
type _5GreaterThan3 = GreaterThan<Num<5>, Num<3>>; // Inferred as true
type _3GreaterThan5 = GreaterThan<Num<3>, Num<5>>; // Inferred as false
type _5GreaterThan5 = GreaterThan<Num<5>, Num<5>>; // Inferred as false

// GreaterThanOrEqual
type _5GEQ3 = GreaterThanOrEqual<Num<5>, Num<3>>; // Inferred as true
type _5GEQ5 = GreaterThanOrEqual<Num<5>, Num<5>>; // Inferred as true
type _3GEQ5 = GreaterThanOrEqual<Num<3>, Num<5>>; // Inferred as false

// LessThan
type _3LessThan5 = LessThan<Num<3>, Num<5>>; // Inferred as true
type _5LessThan3 = LessThan<Num<5>, Num<3>>; // Inferred as false
type _5LessThan5 = LessThan<Num<5>, Num<5>>; // Inferred as false

// LessThanOrEqual
type _3LEQ5 = LessThanOrEqual<Num<3>, Num<5>>; // Inferred as true
type _5LEQ5 = LessThanOrEqual<Num<5>, Num<5>>; // Inferred as true
type _7LEQ5 = LessThanOrEqual<Num<7>, Num<5>>; // Inferred as false

// IsZero
type _0IsZero = IsZero<Num<0>>; // Inferred as true
type _5IsZero = IsZero<Num<5>>; // Inferred as false

// IsEven
type _0IsEven = IsEven<Num<0>>; // Inferred as true
type _2IsEven = IsEven<Num<2>>; // Inferred as true
type _3IsEven = IsEven<Num<3>>; // Inferred as false

// IsOdd
type _3IsOdd = IsOdd<Num<3>>; // Inferred as true
type _4IsOdd = IsOdd<Num<4>>; // Inferred as false

// IsInRange
type _5InRange3to10 = IsInRange<Num<5>, Num<3>, Num<10>>; // Inferred as true
type _5InRange5to10 = IsInRange<Num<5>, Num<5>, Num<10>>; // Inferred as true
type _5InRange0to5 = IsInRange<Num<5>, Num<0>, Num<5>>; // Inferred as true
type _5InRange10to20 = IsInRange<Num<5>, Num<10>, Num<20>>; // Inferred as false
```
