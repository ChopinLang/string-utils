"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
const words_js_1 = __importDefault(require("../split/words.js"));
/**
 * Convert a string to lowercase with hyphens between the words
 *
 * @param {string} subject The string to kebab case
 * @param {(string|string[])} [locale=en-US] The locale or locales to use
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element in the locale param is not a string
 * @example
 * su.kebabCase("Convert this to kebab case")
 * // => "convert-this-to-kebab-case"
 * su.kebabCase("convertThisToKebabCase")
 * // => "convert-this-to-kebab-case"
 */
function kebabCase(subject, locale = "en-US") {
    subject = string_js_1.coerceToString(subject);
    const ws = words_js_1.default(subject);
    return ws.reduce((str, word, i, a) => {
        let s = word.toLocaleLowerCase(locale);
        if (i < a.length - 1) {
            s += "-";
        }
        return (str += s);
    }, "");
}
exports.default = kebabCase;
