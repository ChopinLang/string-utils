/**
 * Joins an array of strings with optional separator
 *
 * @function join
 * @static
 * @since 0.0.1
 * @memberof Join
 * @param {string[]} strings An array of strings
 * @param {string} [sep=""] Separator to insert between strings
 * @returns {string}
 * @example
 * join(["h", "e", "l", "l", "o"])
 * // => "hello"
 * join(["😁", "🐶", "🍕"], "-")
 * // => "😁-🐶-🍕"
 */
export default function join(strings, sep = "") {
  return strings.join(sep);
}
