/**
 * Checks if `value` is null or undefined. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/object/is_nil.js}
 *
 * @function isNil
 * @ignore
 * @param {*} value
 * @returns {boolean} `true` if value is `null` or `undefined`, else `false`
 */
export function isNil(value) {
  return value == null;
}

/**
 * Checks if an object is a string. From {@link https://github.com/panzerdp/voca/blob/master/src/query/is_string.js}
 *
 * @function isString
 * @ignore
 * @param {*} value The value to check
 * @returns {boolean} `true` if string
 */
export function isString(value) {
  return typeof value == "string";
}
