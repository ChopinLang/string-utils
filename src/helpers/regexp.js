/**
 * A function to determine if an object is a RegExp
 * @ignore
 */
export function isRegExp(obj) {
  return obj instanceof RegExp;
}

/**
 * A regular expression string matching digits
 *
 * @type {string}
 * @ignore
 */
export const digit = "\\d";

/**
 * A regular expression string matching whitespace
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const.js}
 *
 * @type {string}
 * @ignore
 */
export const whitespace = "\\s\\uFEFF\\xA0";

/**
 * A regular expression string matching diacritical mark
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const.js}
 *
 * @type {string}
 * @ignore
 */
export const diacriticalMark =
  "\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F";

/**
 * A regular expression to match non characters from from Basic Latin and Latin-1 Supplement Unicode blocks
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 *
 * @type {string}
 * @ignore
 */
const nonCharacter = "\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7";

/**
 * A regular expression to match the dingbat Unicode block
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 *
 * @type {string}
 * @ignore
 */
const dingbatBlock = "\\u2700-\\u27BF";

/**
 * A regular expression string that matches lower case letters: LATIN
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 *
 * @type {string}
 * @ignore
 */
const lowerCaseLetter =
  "a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F";

/**
 * A regular expression string that matches upper case letters: LATIN
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 *
 * @type {string}
 * @ignore
 */
const upperCaseLetter =
  "\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e";

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
 * Regular expression to match whitespace and separator chars that should be trimmed
 *
 * @type {string}
 * @ignore
 */
export const TRIM_CHARS =
  "\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u200B\\u202F\\u205F\\u2028\\u2029\\u3000\\uFEFF";

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

/**
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 * From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}
 * I've added the punctuation in so it doesn't use REGEX_WORD when the only non-passing chars are punctuation.
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_EXTENDED_ASCII = /^[\x01-\xFF\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u00A1-\u00B1\u00B4-\u00B8\u00BA\u00BB\u00BF\u00D7\u00F7\u2000-\u206F\u2E00-\u2E7F]*$/;

/**
 * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
 * See {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js}, but
 * my version keeps punctuation as this will only be used after a string has already been split
 * at its UAX #29 word boundaries. That keeps it from splitting contractions like Voca does.
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_LATIN_WORD = /([A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+)([\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u00A1-\u00B1\u00B4-\u00B8\u00BA\u00BB\u00BF\u00D7\u00F7\u2000-\u206F\u2E00-\u2E7F]([a-z\xDF-\xF6\xF8-\xFF]*[A-Z\xC0-\xD6\xD8-\xDE]*\d*)*)*/g;

/**
 * Regular expression to match Unicode words with characters outside the Basic
 * Latin and Latin-1 Supplement blocks. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/reg_exp/const_extended.js} with slight changes
 *
 * TODO: Fix this so it doesn't strip punctuation since this is only being used after string is already UAX #29 split
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_WORD = new RegExp(
  "(?:[" +
    upperCaseLetter +
    "][" +
    diacriticalMark +
    "]*)?(?:[" +
    lowerCaseLetter +
    "][" +
    diacriticalMark +
    "]*)+|\
    (?:[" +
    upperCaseLetter +
    "][" +
    diacriticalMark +
    "]*)+(?![" +
    lowerCaseLetter +
    "])|\
    [" +
    digit +
    "]+|\
    [" +
    dingbatBlock +
    "]|\
    [" +
    nonCharacter +
    generalPunctuationBlock +
    supplementalPunctuationBlock +
    whitespace +
    "]+",
  "g"
);
