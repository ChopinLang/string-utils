import { coerceToString } from "../helpers/string.js";

/**
 * Capitalizes the first letter of a string and lowercases the rest
 *
 * @function capitalize
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject String to capitalize
 * @param {(string|string[])} [locale=en-US] The locale or locales to use
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 * @example
 * su.capitalize("thIs Is a String to CAPITALIZE")
 * // => "This is a string to capitalize"
 * su.capitalize("İstanbul", "TR")
 * // => İstanbul
 */
export default function capitalize(subject, locale = "en-US") {
  subject = coerceToString(subject);
  return (
    subject[0].toLocaleUpperCase(locale) +
    subject.slice(1).toLocaleLowerCase(locale)
  );
}
