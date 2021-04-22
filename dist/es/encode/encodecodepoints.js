import helpers from "@nyxlang/helpers";
const { coerceToString } = helpers;
/**
 * Split a string into an array of its numeric Unicode code points
 *
 * @function encodeCodePoints
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {string} subject A string to encode
 * @returns {number[]}
 * @example
 * su.encodeCodePoints("hello")
 * // => [0x0068, 0x0065, 0x006c, 0x006c, 0x006f]
 * su.encodeCodePoints("😁🐶🍕")
 * // => [0x1f601, 0x1f436, 0x1f355]
 * su.encodeCodePoints("अनुच्छेद")
 * // => [0x905, 0x928, 0x941, 0x91a, 0x94d, 0x91b, 0x947, 0x926]
 */
export default function encodeCodePoints(subject) {
    subject = coerceToString(subject);
    return [...subject].map((scalar) => scalar.codePointAt(0));
}
