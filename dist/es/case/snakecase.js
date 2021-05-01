import helpers from "@chopinlang/helpers";
import words from "../split/words.js";
const { coerceToString } = helpers;
/**
 * Convert a string to upper or lower snake_case
 *
 * @function snakeCase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to convert
 * @param {Object} param1 Options
 * @param {boolean} param1.upper If true, upcase the whole string
 * @param {string|string[]} A locale string or array of locales
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element in the locale param is not a string
 * @example
 * snakeCase("This is a string")
 * // => "this_is_a_string"
 * snakeCase("thisIsAString", { upper: true })
 * // => "THIS_IS_A_STRING"
 */
export default function snakeCase(subject, { upper = false, locale = "en-US" } = {}) {
    subject = coerceToString(subject);
    const ws = words(subject);
    let str = ws.reduce((st, word) => (st += `_${word}`));
    if (upper) {
        return str.toLocaleUpperCase(locale);
    }
    return str.toLocaleLowerCase(locale);
}
