"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const { coerceToString } = helpers_1.default;
/**
 * Split a string into an array of its numeric Unicode code points
 *
 * @function encodeCodePoints
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {string} subject A string to encode
 * @returns {number[]}
 * @example
 * encodeCodePoints("hello")
 * // => [0x0068, 0x0065, 0x006c, 0x006c, 0x006f]
 * encodeCodePoints("😁🐶🍕")
 * // => [0x1f601, 0x1f436, 0x1f355]
 * encodeCodePoints("अनुच्छेद")
 * // => [0x905, 0x928, 0x941, 0x91a, 0x94d, 0x91b, 0x947, 0x926]
 */
function encodeCodePoints(subject) {
    subject = coerceToString(subject);
    return [...subject].map((scalar) => scalar.codePointAt(0));
}
exports.default = encodeCodePoints;
