import { coerceToString } from "../helpers/string.js";

/**
 * Splits a string into an array of its Unicode scalar values, each
 * of which is represented by a single Unicode code point. Many
 * or even most JavaScript writers call this a "character."
 *
 * @function scalars
 * @static
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split
 * @returns {string[]} An array of Unicode scalars
 * @example
 * su.scalars("hello")
 * // => ["h", "e", "l", "l", "o"]
 * su.scalars("😁🐶🍕")
 * // => ["😁", "🐶", "🍕"]
 */
export default function scalars(subject) {
  subject = coerceToString(subject);
  return [...subject];
}
