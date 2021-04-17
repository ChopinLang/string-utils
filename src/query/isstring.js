/**
 * Checks if an object is a string. From {@link https://github.com/panzerdp/voca/blob/master/src/query/is_string.js}
 *
 * @function isString
 * @param {*} value The value to check
 * @returns {boolean} `true` if string
 */
export default function isString(value) {
  return typeof value == "string";
}
