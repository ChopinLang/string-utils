/**
 * Checks if an object is a string. From {@link https://github.com/panzerdp/voca/blob/master/src/query/is_string.js}
 *
 * @function isString
 * @static
 * @since 0.0.1
 * @memberof Query
 * @function isString
 * @param {*} value The value to check
 * @returns {boolean} `true` if string
 * @example
 * isString("hello")
 * // => true
 */
export default function isString(value) {
  return (
    typeof value == "string" ||
    (typeof value == "object" && value instanceof String)
  );
}
