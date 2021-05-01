"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const grapheme_iterator_js_1 = __importDefault(require("../lib/grapheme_iterator.js"));
const { coerceToString } = helpers_1.default;
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
 * graphemes("hello")
 * // => ["h", "e", "l", "l", "o"]
 * graphemes("अनुच्छेद")
 * // => ['अ', 'नु', 'च्', 'छे', 'द']
 */
function graphemes(subject) {
    subject = coerceToString(subject);
    return [...grapheme_iterator_js_1.default(subject)];
}
exports.default = graphemes;
