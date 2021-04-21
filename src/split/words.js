import { split } from "unicode-default-word-boundary";
import { coerceToString } from "../helpers/string.js";
import {
  REGEXP_PUNCTUATION,
  IS_PUNCTUATION,
  REGEXP_EXTENDED_ASCII,
  REGEXP_LATIN_WORD,
  REGEXP_WORD,
} from "../helpers/regexp.js";

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
  let ws = split(sansUnderscores).filter((word) => !IS_PUNCTUATION.test(word));
  ws = ws.map((w) => {
    const regexp = REGEXP_EXTENDED_ASCII.test(w)
      ? REGEXP_LATIN_WORD
      : REGEXP_WORD;
    if (regexp.test(w)) {
      return [...w.match(regexp)];
    }
    return w;
  });
  ws = ws.reduce((acc, w) => {
    if (Array.isArray(w)) {
      acc.push(...w);
      return acc;
    }
    return [...acc, w];
  }, []);
  return ws;
}

export default words;
