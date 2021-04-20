import ws from "unicode-default-word-boundary";
import { coerceToString } from "../helpers/string.js";
import { IS_PUNCTUATION } from "../helpers/regexp.js";

/**
 * Splits a string into words using {@link http://www.unicode.org/reports/tr29/ Unicode UAX #29} and strips punctuation
 *
 * @function words
 * @static
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split into words
 * @returns {string[]} An array of words
 */
function words(subject) {
  subject = coerceToString(subject);
  const sansUnderscores = subject.replace(/_/g, " ");
  return ws.split(sansUnderscores).filter((word) => !IS_PUNCTUATION.test(word));
}

export default words;
