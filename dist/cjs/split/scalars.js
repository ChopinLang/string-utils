"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const { coerceToString } = helpers_1.default;
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
 * scalars("hello")
 * // => ["h", "e", "l", "l", "o"]
 * scalars("😁🐶🍕")
 * // => ["😁", "🐶", "🍕"]
 */
function scalars(subject) {
    subject = coerceToString(subject);
    return [...subject];
}
exports.default = scalars;
