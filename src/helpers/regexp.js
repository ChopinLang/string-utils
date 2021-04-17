/**
 * Matches ASCII punctuation marks
 *
 * @type {string}
 * @ignore
 */
const asciiPunctuation =
  "\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E";

/**
 * Matches punctuation marks in Unicode Block "Latin-1 Supplement"
 *
 * @type {string}
 * @ignore
 */
const latin1SupplementPunctuation =
  "\\u00A1-\\u00B1\\u00B4-\\u00B8\\u00BA\\u00BB\\u00BF\\u00D7\\u00F7";

/**
 * Matches the Unicode General Punctuation Block
 *
 * @type {string}
 * @ignore
 */
const generalPunctuationBlock = "\\u2000-\\u206F";

/**
 * Matches the Unicode Supplemental Punctuation Block
 *
 * @type {string}
 * @ignore
 */
const supplementalPunctuationBlock = "\\u2E00-\\u2E7F";

/**
 * Regular expression to match punctuation
 *
 * Note that there are still several obscure punctuation marks in other
 * blocks this RegExp will not catch. If we encounter enough of those
 * edge cases, I'll try and add at least some of them to this list.
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_PUNCTUATION = new RegExp(
  `[${asciiPunctuation}${latin1SupplementPunctuation}${generalPunctuationBlock}${supplementalPunctuationBlock}]`,
  "g"
);

/**
 * Regular expression to match when EVERY char in string is punctuation
 *
 * @type {RegExp}
 * @ignore
 */
export const IS_PUNCTUATION = new RegExp(
  `^([${asciiPunctuation}${latin1SupplementPunctuation}${generalPunctuationBlock}${supplementalPunctuationBlock}])+$`
);
