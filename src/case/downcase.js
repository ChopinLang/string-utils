import { coerceToString } from "../helpers/string.js";

/**
 * Convert a string to lowercase based on locale information
 *
 * @function downcase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject String to downcase
 * @param {string|string[]} locale Locale information or an array of locales
 * @example
 * su.downcase("This IS A StRiNg")
 * // => "this is a string"
 * su.downcase("İSTANBUL")
 * // => "i̇stanbul"
 */
export default function downcase(subject, locale = "en-US") {
  subject = coerceToString(subject);
  return subject.toLocaleLowerCase(locale);
}
