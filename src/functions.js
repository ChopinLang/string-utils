/**
 * Functions to change string casing
 * @namespace Case
 */
import camelCase from "./case/camelcase";
import capitalize from "./case/capitalize";
import decapitalize from "./case/decapitalize";
import downcase from "./case/downcase";
import kebabCase from "./case/kebabcase";
import pascalCase from "./case/pascalcase";
import snakeCase from "./case/snakecase";

/**
 * Functions to encode and decode strings
 * @namespace Encode
 */
import decodeCodePoints from "./encode/decodecodepoints";
import decodeUTF8 from "./encode/decodeutf8";
import decodeUTF16 from "./encode/decodeutf16";
import encodeCodePoints from "./encode/encodecodepoints";
import encodeUTF8 from "./encode/encodeutf8";
import encodeUTF16 from "./encode/encodeutf16";

/**
 * Functions to join strings
 * @namespace Join
 */
import join from "./join/join";

/**
 * Functions to query strings
 * @namespace Query
 */
import isString from "./query/isstring";

/**
 * Functions to split a string
 * @namespace Split
 */
import graphemes from "./split/graphemes";
import scalars from "./split/scalars";
import words from "./split/words";

/**
 * Functions to strip characters from a string
 */
import stripPunc from "./strip/strippunc";

// Can't use object property shorthand because
// then JSDoc names functions incorrectly
export default {
  // Case
  camelCase: camelCase,
  capitalize: capitalize,
  decapitalize: decapitalize,
  downcase: downcase,
  kebabCase: kebabCase,
  pascalCase: pascalCase,
  snakeCase: snakeCase,

  // Encode
  decodeCodePoints: decodeCodePoints,
  decodeUTF8: decodeUTF8,
  decodeUTF16: decodeUTF16,
  encodeCodePoints: encodeCodePoints,
  encodeUTF8: encodeUTF8,
  encodeUTF16: encodeUTF16,

  // Join
  join: join,

  // Query
  isString: isString,

  // Split
  graphemes: graphemes,
  scalars: scalars,
  words: words,

  // Strip
  stripPunc: stripPunc,
};
