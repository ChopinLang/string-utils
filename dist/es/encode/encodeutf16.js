import helpers from "@nyxlang/helpers";
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
 * su.charCodes("hello")
 * // => [104, 101, 108, 108, 111];
 * su.charCodes("😁🐶🍕")
 * // => [55357, 56833, 55357, 56374, 55356, 57173]
 */
export default function charCodes(subject) {
    subject = coerceToString(subject);
    return subject.split("").map((char) => char.charCodeAt(0));
}
