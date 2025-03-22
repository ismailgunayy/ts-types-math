# TypeScript Type-Level Mathematics

A library that performs arithmetic operations purely within TypeScript's type system, with calculations happening only during type checking in the TypeScript Language Server.

## Limitations

- **Range Constraints**: Limited to numbers within the range of TypeScript's tuple length limit (currently 999)
- **Number Types**: Does not handle negative numbers or floating-point numbers

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
type _4Over4 = Divide<Num<4>, Num<4>>; // Inferred as 1
type _9Over4 = Divide<Num<9>, Num<4>>; // Inferred as 2
type _0Over4 = Divide<Num<0>, Num<4>>; // Inferred as 0

// Power
type _0ToThe0th = Power<Num<0>, Num<0>>; // Inferred as never
type _0ToThe5th = Power<Num<0>, Num<5>>; // Inferred as 0
type _6ToThe0th = Power<Num<6>, Num<0>>; // Inferred as 1
type _3ToThe4th = Power<Num<3>, Num<4>>; // Inferred as 81

/**
 * COMPARISONS
 */

// IsEqual
type _4Equals4 = IsEqual<Num<4>, Num<4>>; // Inferred as true

// GreaterThan
type _5GreaterThan3 = GreaterThan<Num<5>, Num<3>>; // Inferred as true

// LessThan
type _3LessThan5 = LessThan<Num<3>, Num<5>>; // Inferred as true
```
