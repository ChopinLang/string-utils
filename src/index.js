/**
 * Functions to change string casing
 * @namespace Case
 */
import camelCase from "./case/camelcase";
import capitalize from "./case/capitalize";

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
  camelCase,
  capitalize,

  // Query
  isString,

  // Split
  charCodes,
  words,
};
