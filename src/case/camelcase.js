import { coerceToString } from "../helpers/string.js";
import capitalize from "./capitalize.js";
import words from "../split/words.js";

/**
 * Converts `subject` to {@link https://en.wikipedia.org/wiki/Camel_case camelCase}.
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to camelCase
 * @param {(string|string[])} [locale=en-US] The locale or locales to use for capitalization
 * @returns {string} the camelCased string with non-word characters stripped out
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 * @example
 * su.camelCase("bird flight")
 * // => "birdFlight"
 * su.camelCase("this_is_a_string")
 * // => "thisIsAString"
 * su.camelCase("   _-It is istanbul   not constantinople-_ ", "TR")
 * // => "itİsİstanbulNotConstantinople"
 */
export default function camelCase(subject, locale = "en-US") {
  subject = coerceToString(subject);
  const splitWords = words(subject);
  return splitWords.reduce((str, word, i) => {
    const cased =
      i == 0 ? word.toLocaleLowerCase(locale) : capitalize(word, locale);
    return str + cased;
  }, "");
}
