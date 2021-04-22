"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Decode an array of Unicode code points into a string
 *
 * @function decodeCodePoints
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {number[]} data An array of Unicode code points
 * @returns {string}
 * @example
 * decodeCodePoints([0x0068, 0x0065, 0x006c, 0x006c, 0x006f])
 * // => "hello"
 * decodeCodePoints([0x1f601, 0x1f436, 0x1f355])
 * // => "😁🐶🍕"
 */
function decodeCodePoints(data) {
    return data.reduce((str, point) => str + String.fromCodePoint(point), "");
}
exports.default = decodeCodePoints;
