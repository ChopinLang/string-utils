import helpers from "@nyxlang/helpers";
import capitalize from "./capitalize.js";
import words from "../split/words.js";
import stripPunc from "../strip/strippunc.js";

const { coerceToString } = helpers;

/**
 * Converts `subject` to {@link https://en.wikipedia.org/wiki/Camel_case camelCase}.
 * @function camelCase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to camelCase
 * @param {(string|string[])} [locale=en-US] The locale or locales to use for capitalization
 * @returns {string} the camelCased string with non-word characters stripped out
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 * @example
 * camelCase("bird flight")
 * // => "birdFlight"
 * camelCase("this_is_a_string")
 * // => "thisIsAString"
 * camelCase("   _-It is istanbul   not constantinople-_ ", "TR")
 * // => "itİsİstanbulNotConstantinople"
 */
export default function camelCase(subject, locale = "en-US") {
  subject = coerceToString(subject);
  const splitWords = words(subject);
  return splitWords.reduce((str, word, i) => {
    const cased =
      i == 0
        ? stripPunc(word.toLocaleLowerCase(locale))
        : stripPunc(capitalize(word, { lower: true, locale }));
    return str + cased;
  }, "");
}
