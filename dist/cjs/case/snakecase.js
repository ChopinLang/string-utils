"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
const words_js_1 = __importDefault(require("../split/words.js"));
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
 * su.snakeCase("This is a string")
 * // => "this_is_a_string"
 * su.snakeCase("thisIsAString", { upper: true })
 * // => "THIS_IS_A_STRING"
 */
function snakeCase(subject, { upper = false, locale = "en-US" } = {}) {
    subject = string_js_1.coerceToString(subject);
    const ws = words_js_1.default(subject);
    let str = ws.reduce((st, word) => (st += `_${word}`));
    if (upper) {
        return str.toLocaleUpperCase(locale);
    }
    return str.toLocaleLowerCase(locale);
}
exports.default = snakeCase;
