# Chopin String Utilities

Chopin String Utilities offers a wide range of string processing and manipulation functions to handle a wide variety of text wrangling tasks. The library is the backbone of the [Chopin Programming Language's](https://github.com/ChopinLang/ChopinLang) String type, but it is also perfectly suitable for use in other projects.

## Installation

```
npm install @chopinlang/string-utils
```

## Usage

You can use the ES2015 import statement to include the package:

```js
import * as su from "@chopinlang/string-utils";
```

Or if you need CommonJS you can require it:

```js
const su = require("@chopinlang/string-utils");
```

Or simply import the individual functions you need:

```js
// ES2015 import
import { camelCase, decodeUTF8, graphemes } from "@chopinlang/string-utils";

// CommonJS
const { camelCase, decodeUTF8, graphemes } = require("@chopinlang/string-utils");
```

Then simply call library functions as methods on the `su` object:

```js
camelcase("++this-__is-spartaaaaa++");
// => "thisIsSpartaaaaa"

graphemes("अनुच्छेद");
// => ["अ", "नु", "च्", "छे", "द"]

decodeUTF8([0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81]);
// => "😀😁"
```

[Complete API documentation](https://chopinlang.github.io/string-utils/)
