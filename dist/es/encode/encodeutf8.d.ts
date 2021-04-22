/**
 * Encodes a string into an array of UTF-8 code unit values. From {@link https://stackoverflow.com/a/18729931}
 *
 * @function encodeUTF8
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {string} subject String to encode
 * @returns {number[]} An array of UTF-8 byte values
 * @example
 * encodeUTF8("hello")
 * // => [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * encodeUTF8("😀😁")
 * // => [0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81]
 */
export default function encodeUTF8(subject: string): number[];
