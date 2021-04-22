"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@nyxlang/helpers"));
const { coerceToString } = helpers_1.default;
/**
 * Split a string into an array of its UTF-16 char codes
 *
 * @function charCodes
 * @static
 * @since 0.0.1
 * @memberof Split
 * @param {string} subject The string to split
 * @returns {number[]} An array of numeric char codes
 * @example
 * encodeUTF16("hello")
 * // => [104, 101, 108, 108, 111];
 * encodeUTF16("😁🐶🍕")
 * // => [55357, 56833, 55357, 56374, 55356, 57173]
 */
function encodeUTF16(subject) {
    subject = coerceToString(subject);
    return subject.split("").map((char) => char.charCodeAt(0));
}
exports.default = encodeUTF16;
