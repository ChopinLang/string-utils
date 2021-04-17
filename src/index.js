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
import encodeUTF8 from "./encode/encodeutf8";
import decodeUTF8 from "./encode/decodeutf8";

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

export default {
  // Case
  camelCase: camelCase,
  capitalize: capitalize,

  // Encode
  encodeUTF8,
  decodeUTF8,

  // Query
  isString,

  // Split
  charCodes,
  words,
};
