# Nyx Helpers

A collection of useful helper functions used internally in the Nyx interpreter

## Installation

The package is not currently published to NPM, so you'll have to either clone the repo or download + unzip it into your dependencies directory.

## Usage

Include the object in your project:

```js
const helpers = require("helpers");

// You can also destructure your assignment to only get the functions you need
const { isArray, isNumber, handleNegativeIndex } = require("helpers");
```

### The functions

#### isArray

`(any) -> boolean`

Determine if an object is an array.

#### isArrayLike

`(any) -> boolean`

Determine if an object is array-like, e.g. has a length property and items stored in numeric indexes.

#### isBoolean

`(any) -> boolean`

Determine if an object is a boolean value.

#### isNil

`(any) -> boolean`

Determine if a value is `null` or `undefined`.

#### isNull

`(any) -> boolean`

Determine if a value is specifically null.

#### isUndefined

`(any) -> boolean`

Determine if a value is specifically undefined.

#### nilDefault

`(any) -> any`

If a value is null or undefined, specify a default value to return. Otherwise, return the value itself.

#### handleNegativeIndex

`(number, string|array|object) -> number`

If second parameter is object, must be an array-like object or other iterable with numeric indexes.

Converts a negative index into its corresponding positive index relative to a sequence's length. Returns zero or positive index as-is.

#### isBigInt

`(any) -> boolean`

Determine if a value is a BigInteger.

#### isNumber

`(any) -> number`

Determine if a value is a number.

#### valueOf

`(any) -> number`

Convert a value into its numeric equivalent.

CAUTION: will return `NaN` if the value has no direct numeric equivalent. Will return `Infinity` or `-Infinity` if the value is too large or small to be represented by a JavaScript number.

#### isRegExp

`(any) -> boolean`

Determine if an object is a RegExp.

#### coerceToString

`(any) -> string`

If a value is not a string, coerce it to its string representation.

#### isString

`(any) -> boolean`

Determine if a value is a string.

#### isSymbol

`(any) -> boolean`

Determine if a value is a Symbol.

#### isDefined

`(any) -> boolean`

Determine if a value is defined or undefined.
