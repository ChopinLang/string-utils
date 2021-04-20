/**
 * Functions to change string casing
 * @namespace Case
 */
import camelCase from "./case/camelcase";
import capitalize from "./case/capitalize";

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
 * Functions to query strings
 * @namespace Query
 */
import isString from "./query/isstring";

/**
 * Functions to split a string
 * @namespace Split
 */
import words from "./split/words";

// Can't use object property shorthand because
// then JSDoc names functions incorrectly
export default {
  // Case
  camelCase: camelCase,
  capitalize: capitalize,

  // Encode
  decodeCodePoints: decodeCodePoints,
  decodeUTF8: decodeUTF8,
  decodeUTF16: decodeUTF16,
  encodeCodePoints: encodeCodePoints,
  encodeUTF8: encodeUTF8,
  encodeUTF16: encodeUTF16,

  // Query
  isString: isString,

  // Split
  words: words,
};
