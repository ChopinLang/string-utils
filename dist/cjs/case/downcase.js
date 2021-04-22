"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
/**
 * Convert a string to lowercase based on locale information
 *
 * @function downcase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject String to downcase
 * @param {string|string[]} locale Locale information or an array of locales
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element in the locale param is not a string
 * @example
 * su.downcase("This IS A StRiNg")
 * // => "this is a string"
 * su.downcase("İSTANBUL")
 * // => "i̇stanbul"
 */
function downcase(subject, locale = "en-US") {
    subject = string_js_1.coerceToString(subject);
    return subject.toLocaleLowerCase(locale);
}
exports.default = downcase;
