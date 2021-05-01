import helpers from "@chopinlang/helpers";
const { coerceToString } = helpers;

/**
 * Split a string into an array of its UTF-16 char codes
 *
 * @function charCodes
 * @static
 * @since 0.0.1
 * @memberof Split
 * @param {string} subject The string to split
 * @returns {number[]} An array of numeric char codes
 * @example
 * encodeUTF16("hello")
 * // => [104, 101, 108, 108, 111];
 * encodeUTF16("😁🐶🍕")
 * // => [55357, 56833, 55357, 56374, 55356, 57173]
 */
export default function encodeUTF16(subject) {
  subject = coerceToString(subject);
  return subject.split("").map((char) => char.charCodeAt(0));
}
