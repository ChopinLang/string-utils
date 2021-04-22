import helpers from "@nyxlang/helpers";
import words from "../split/words.js";
const { coerceToString } = helpers;
/**
 * Convert a string to lowercase with hyphens between the words
 *
 * @param {string} subject The string to kebab case
 * @param {(string|string[])} [locale=en-US] The locale or locales to use
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element in the locale param is not a string
 * @example
 * su.kebabCase("Convert this to kebab case")
 * // => "convert-this-to-kebab-case"
 * su.kebabCase("convertThisToKebabCase")
 * // => "convert-this-to-kebab-case"
 */
export default function kebabCase(subject, locale = "en-US") {
    subject = coerceToString(subject);
    const ws = words(subject);
    return ws.reduce((str, word, i, a) => {
        let s = word.toLocaleLowerCase(locale);
        if (i < a.length - 1) {
            s += "-";
        }
        return (str += s);
    }, "");
}
