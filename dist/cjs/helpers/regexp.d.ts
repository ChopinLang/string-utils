/**
 * A function to determine if an object is a RegExp
 * @ignore
 */
export function isRegExp(obj: any): boolean;
/**
 * A regular expression string matching digits
 *
 * @type {string}
 * @ignore
 */
export const digit: string;
/**
 * A regular expression string matching whitespace
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const.js}
 *
 * @type {string}
 * @ignore
 */
export const whitespace: string;
/**
 * A regular expression string matching diacritical mark
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const.js}
 *
 * @type {string}
 * @ignore
 */
export const diacriticalMark: string;
/**
 * Regular expression to match whitespace and separator chars that should be trimmed
 *
 * @type {string}
 * @ignore
 */
export const TRIM_CHARS: string;
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
export const REGEXP_PUNCTUATION: RegExp;
/**
 * Regular expression to match when EVERY char in string is punctuation
 *
 * @type {RegExp}
 * @ignore
 */
export const IS_PUNCTUATION: RegExp;
/**
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 * I've added the punctuation in so it doesn't use REGEX_WORD when the only non-passing chars are punctuation.
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_EXTENDED_ASCII: RegExp;
/**
 * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
 * See {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}, but
 * my version keeps punctuation as this will only be used after a string has already been split
 * at its UAX #29 word boundaries. That keeps it from splitting contractions like Voca does.
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_LATIN_WORD: RegExp;
/**
 * Regular expression to match Unicode words with characters outside the Basic
 * Latin and Latin-1 Supplement blocks. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js} with slight changes
 *
 * TODO: Fix this so it doesn't strip punctuation since this is only being used after string is already UAX #29 split
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_WORD: RegExp;
