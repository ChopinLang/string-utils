import helpers from "@nyxlang/helpers";
const { coerceToString } = helpers;

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
 * su.encodeUTF8("hello")
 * // => [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * su.encodeUTF8("😀😁")
 * // => [0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81]
 */
export default function encodeUTF8(subject) {
  subject = coerceToString(subject);
  let utf8 = [];
  for (var i = 0; i < subject.length; i++) {
    let charcode = subject.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(
        0xe0 | (charcode >> 12),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    }
    // surrogate pair
    else {
      i++;
      // UTF-16 encodes 0x10000-0x10FFFF by
      // subtracting 0x10000 and splitting the
      // 20 bits of 0x0-0xFFFFF into two halves
      charcode =
        0x10000 +
        (((charcode & 0x3ff) << 10) | (subject.charCodeAt(i) & 0x3ff));
      utf8.push(
        0xf0 | (charcode >> 18),
        0x80 | ((charcode >> 12) & 0x3f),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    }
  }
  return utf8;
}
