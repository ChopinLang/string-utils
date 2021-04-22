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
 * su.join(["h", "e", "l", "l", "o"])
 * // => "hello"
 * su.join(["😁", "🐶", "🍕"], "-")
 * // => "😁-🐶-🍕"
 */
export default function join(strings: string[], sep?: string | undefined): string;
