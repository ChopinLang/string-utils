import { coerceToString } from "../helpers/string.js";
import words from "../split/words.js";
import capitalize from "./capitalize.js";

/**
 * Convert a string to PascalCase
 *
 * @function pascalCase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to convert to PascalCase
 * @returns {string}
 * @example
 * su.pascalCase("this IS some TEXT")
 * // => "ThisIsSomeText"
 */
export default function pascalCase(subject) {
  subject = coerceToString(subject);
  const ws = words(subject);
  return ws.reduce((str, word) => (str += capitalize(word)), "");
}
