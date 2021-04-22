"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
/**
 * Splits a string into an array of its Unicode scalar values, each
 * of which is represented by a single Unicode code point. Many
 * or even most JavaScript writers call this a "character."
 *
 * @function scalars
 * @static
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split
 * @returns {string[]} An array of Unicode scalars
 * @example
 * su.scalars("hello")
 * // => ["h", "e", "l", "l", "o"]
 * su.scalars("😁🐶🍕")
 * // => ["😁", "🐶", "🍕"]
 */
function scalars(subject) {
    subject = string_js_1.coerceToString(subject);
    return [...subject];
}
exports.default = scalars;
