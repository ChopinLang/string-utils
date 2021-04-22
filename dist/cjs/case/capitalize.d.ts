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
 * @throws {TypeError} if an array element in the locale param is not a string
 * @example
 * capitalize("thIs Is a String to CAPITALIZE")
 * // => "ThIs Is a String to CAPITALIZE"
 * capitalize("thIs Is a String to CAPITALIZE", { lower: true })
 * // => "This is a string to capitalize"
 * capitalize("thIs Is a String to CAPITALIZE", { lower: true, all: true })
 * // => "This Is A String To Capitalize"
 * capitalize("istanbul", { locale: "TR" })
 * // => İstanbul
 */
export default function capitalize(subject: string, { lower, all, locale }?: {
    lower?: boolean | undefined;
    all?: boolean | undefined;
    locale?: string | string[] | undefined;
} | undefined): string;
