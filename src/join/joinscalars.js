/**
 * Joins an array of Unicode scalars, each of which is
 * the string value for a single Unicode code point
 *
 * @function joinScalars
 * @static
 * @since 0.0.1
 * @memberof Join
 * @param {string[]} scalars An array of Unicode scalars
 * @returns {string}
 * @example
 * su.joinScalars(["h", "e", "l", "l", "o"])
 * // => "hello"
 * su.joinScalars(["😁", "🐶", "🍕"])
 * // => "😁🐶🍕"
 */
export default function joinScalars(scalars) {
  return scalars.join("");
}
