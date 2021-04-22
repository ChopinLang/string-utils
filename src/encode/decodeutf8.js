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
 * decodeUTF8([0x68, 0x65, 0x6c, 0x6c, 0x6f])
 * // => "hello"
 * decodeUTF8([0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81])
 * // => "😀😁"
 */
export default function decodeUTF8(data) {
  let str = "",
    i;

  for (i = 0; i < data.length; i++) {
    let value = data[i];

    if (value < 0x80) {
      str += String.fromCharCode(value);
    } else if (value > 0xbf && value < 0xe0) {
      str += String.fromCharCode(((value & 0x1f) << 6) | (data[i + 1] & 0x3f));
      i += 1;
    } else if (value > 0xdf && value < 0xf0) {
      str += String.fromCharCode(
        ((value & 0x0f) << 12) |
          ((data[i + 1] & 0x3f) << 6) |
          (data[i + 2] & 0x3f)
      );
      i += 2;
    } else {
      // surrogate pair
      var charCode =
        (((value & 0x07) << 18) |
          ((data[i + 1] & 0x3f) << 12) |
          ((data[i + 2] & 0x3f) << 6) |
          (data[i + 3] & 0x3f)) -
        0x010000;

      str += String.fromCharCode(
        (charCode >> 10) | 0xd800,
        (charCode & 0x03ff) | 0xdc00
      );
      i += 3;
    }
  }

  return str;
}
