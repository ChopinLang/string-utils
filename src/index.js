/**
 * Functions to change string casing
 * @namespace Case
 */
import camelCase from "./case/camelcase";
import capitalize from "./case/capitalize";

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

  // Split
  charCodes,
  words,
};
