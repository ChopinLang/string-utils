/**
 * Converts an array of UTF-16 char codes into a string
 *
 * @function decodeUTF16
 * @static
 * @since 0.0.1
 * @memberof Encode
 * @param {number[]} codes
 * @returns {string}
 * @example
 * su.decodeUTF16([0x0068, 0x0065, 0x006c, 0x006c, 0x006f])
 * // => "hello"
 * su.decodeUTF16([0xd83d, 0xde01, 0xd83d, 0xdc36, 0xd83c, 0xdf55])
 * // => "😁🐶🍕"
 */
export default function decodeUTF16(codes: number[]): string;
