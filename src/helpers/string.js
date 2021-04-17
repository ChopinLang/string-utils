import { isNil, isString } from "./query";

/**
 * Coerce a value to its string representation. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/string/coerce_to_string.js}
 *
 * @ignore
 * @function coerceToString
 * @param {*} value To coerce to a string
 * @returns {string}
 */
export function coerceToString(value) {
  if (isNil(value)) {
    return "";
  }
  if (isString(value)) {
    return value;
  }
  return String(value);
}
