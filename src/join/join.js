/**
 * Joins an array of strings with optional separator
 *
 * @function join
 * @static
 * @since 0.0.1
 * @memberof Join
 * @param {string[]} scalars An array of Unicode scalars
 * @returns {string}
 * @example
 * su.join(["h", "e", "l", "l", "o"])
 * // => "hello"
 * su.join(["😁", "🐶", "🍕"], "-")
 * // => "😁-🐶-🍕"
 */
export default function joinScalars(strings, sep = "") {
  return strings.join(sep);
}
