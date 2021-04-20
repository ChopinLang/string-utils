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
import encodeUTF8 from "./encode/encodeutf8";

/**
 * Functions to query strings
 * @namespace Query
 */
import isString from "./query/isstring";

/**
 * Functions to split a string
 * @namespace Split
 */
import charCodes from "./split/charcodes";
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
  encodeUTF8: encodeUTF8,

  // Query
  isString: isString,

  // Split
  charCodes: charCodes,
  words: words,
};
