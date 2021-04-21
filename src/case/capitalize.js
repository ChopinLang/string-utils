import { coerceToString } from "../helpers/string.js";
import words from "../split/words.js";

/**
 * Capitalizes the first letter of a string. If lower is true, downcases the rest
 * of the string. If all is true, all words in the string will be capitalized.
 * Use the locale parameter to set the locale for casing the string.
 *
 * @function capitalize
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject String to capitalize
 * @param {Object} [options] Optional parameters
 * @param {boolean} [options.lower=false] Downcase the rest of the string if true
 * @param {boolean} [options.all=false] Capitalize every word in the string if true
 * @param {(string|string[])} [options.locale=en-US] The locale or locales to use
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 * @example
 * su.capitalize("thIs Is a String to CAPITALIZE", { lower: true })
 * // => "This is a string to capitalize"
 * su.capitalize("thIs Is a String to CAPITALIZE", { lower: true, all: true })
 * // => "This Is A String To Capitalize"
 * su.capitalize("istanbul", { locale: "TR" })
 * // => İstanbul
 */
export default function capitalize(
  subject,
  { lower = false, all = false, locale = "en-US" } = {}
) {
  subject = coerceToString(subject);
  let str = subject[0].toLocaleUpperCase(locale) + subject.slice(1);
  if (lower) {
    str = str[0] + str.slice(1).toLocaleLowerCase(locale);
  }
  if (all) {
    const ws = words(str);
    str = ws.reduce((s, w, i, a) => {
      let st = w[0].toLocaleUpperCase(locale) + w.slice(1);
      if (i < a.length - 1) {
        st += " ";
      }
      return s + st;
    }, "");
  }
  return str;
}

console.log(capitalize("istanbul"));
