"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
const grapheme_iterator_js_1 = __importDefault(require("../lib/grapheme_iterator.js"));
/**
 * Splits a string into an array of Unicode extended grapheme clusters.
 * These more closely correspond to what the reader perceives as
 * characters in cases where code points are not sufficient.
 *
 * @function graphemes
 * @static
 * @since 0.0.1
 * @memberof Split
 * @param {string} subject String to split into graphemes
 * @returns {string[]} An array of graphemes
 * @example
 * su.graphemes("hello")
 * // => ["h", "e", "l", "l", "o"]
 * su.graphemes("अनुच्छेद")
 * // => ['अ', 'नु', 'च्', 'छे', 'द']
 */
function graphemes(subject) {
    subject = string_js_1.coerceToString(subject);
    return [...grapheme_iterator_js_1.default(subject)];
}
exports.default = graphemes;
