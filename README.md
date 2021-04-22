# Nyx String Utilities

Nyx String Utilities offers a wide range of string processing and manipulation functions to handle a wide variety of text wrangling tasks. The library is the backbone of the [Nyx Programming Language's](https://github.com/NyxLang/nyx) String type, but it is also perfectly suitable for use in other projects.

We spend nearly as much time on the documentation as on the code to make sure you don't have any trouble finding and using what you need. We also support use in both browser and Node.js environments, and you can either `require` the library or `import` it as an ECMAScript module.

## Installation

The package is not yet published on NPM, so you'll need to clone (or download and unzip) the repo into your dependencies folder to install it.

## Usage

You can use the ES2015 import statement to include the package:

```js
import su from "string-utils";
```

Or if you need CommonJS you can require it:

```js
const su = require("string-utils");
```

Then simply call library functions as methods on the `su` object:

```js
su.camelcase("++this-__is-spartaaaaa++");
// => "thisIsSpartaaaaa"

su.graphemes("अनुच्छेद");
// => ["अ", "नु", "च्", "छे", "द"]

su.decodeUTF8([0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81]);
// => "😀😁"
```

[Complete API documentation](https://nyxlang.github.io/string-utils/)
