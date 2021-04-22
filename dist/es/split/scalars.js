import helpers from "@nyxlang/helpers";
const { coerceToString } = helpers;
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
 * scalars("hello")
 * // => ["h", "e", "l", "l", "o"]
 * scalars("😁🐶🍕")
 * // => ["😁", "🐶", "🍕"]
 */
export default function scalars(subject) {
    subject = coerceToString(subject);
    return [...subject];
}
