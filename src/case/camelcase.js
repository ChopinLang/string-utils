/**
 * Converts `subject` to {@link https://en.wikipedia.org/wiki/Camel_case camelCase}.
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to camelCase
 * @param {(string|string[])} [locale=en-US] The locale or locales to use for capitalization
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 */
function camelCase(subject, locale = "en-US") {}

module.exports = camelCase;
