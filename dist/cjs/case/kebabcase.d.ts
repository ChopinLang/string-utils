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
export default function kebabCase(subject: string, locale?: string | string[] | undefined): string;
