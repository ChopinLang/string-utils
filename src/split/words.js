import ws from "unicode-default-word-boundary";
// node can't find this - why???
import { coerceToString } from "../helpers/string.js";
import { IS_PUNCTUATION } from "../helpers/regexp.js";

/**
 * Splits a string into words using {@link http://www.unicode.org/reports/tr29/ Unicode UAX #29} and strips punctuation
 *
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split into words
 * @returns {string[]} An array of words
 */
function words(subject) {
  subject = coerceToString(subject);
  return ws.split(subject).filter((word) => !IS_PUNCTUATION.test(word));
}

export default words;
