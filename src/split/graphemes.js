import helpers from "@chopinlang/helpers";
import grapheme_iterator from "../lib/grapheme_iterator.js";

const { coerceToString } = helpers;

/**
 * Splits a string into an array of Unicode extended grapheme clusters.
 * These more closely correspond to what the reader perceives as
 * characters in cases where code points are not sufficient.
 *
 * @function graphemes
 * @static
 * @since 0.0.1
 * @memberof Split
 * @param {string} subject String to split into graphemes
 * @returns {string[]} An array of graphemes
 * @example
 * graphemes("hello")
 * // => ["h", "e", "l", "l", "o"]
 * graphemes("अनुच्छेद")
 * // => ['अ', 'नु', 'च्', 'छे', 'द']
 */
export default function graphemes(subject) {
  subject = coerceToString(subject);
  return [...grapheme_iterator(subject)];
}
