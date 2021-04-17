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
  `[${generalPunctuationBlock}]|[${supplementalPunctuationBlock}]`,
  "g"
);
