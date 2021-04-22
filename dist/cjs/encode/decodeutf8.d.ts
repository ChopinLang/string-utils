/**
 * Decodes an array of UTF-8 bytes. From {@link https://gist.github.com/joni/3760795#gistcomment-1299119}.
 *
 * @function decodeUTF8
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {number[]} data Array of UTF-8 encoded bytes
 * @returns {string} Decoded string
 * @example
 * su.decodeUTF8([0x68, 0x65, 0x6c, 0x6c, 0x6f])
 * // => "hello"
 * su.decodeUTF8([0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81])
 * // => "😀😁"
 */
export default function decodeUTF8(data: number[]): string;
