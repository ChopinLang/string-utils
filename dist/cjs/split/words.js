"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unicode_default_word_boundary_1 = require("unicode-default-word-boundary");
const helpers_1 = __importDefault(require("@nyxlang/helpers"));
const regexp_js_1 = require("../helpers/regexp.js");
const { coerceToString, isNil, nilDefault } = helpers_1.default;
/**
 * Splits a string into words using {@link http://www.unicode.org/reports/tr29/ Unicode UAX #29} and strips punctuation
 *
 * @function words
 * @static
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split into words
 * @returns {string[]} An array of words
 * @example
 * su.words("This is a string")
 * // => ["This", "is", "a", "string"]
 * su.words("The quick (“brown”) fox can’t jump 32.3 feet, right?")
 * // => ["The", "quick", "brown", "fox", "can’t", "jump", "32.3", "feet", "right"]
 * su.words("В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!")
 * // => ["В", "чащах", "юга", "жил", "бы", "цитрус", "Да", "но", "фальшивый", "экземпляр"]
 * su.words("thisIsAStringToSplit")
 * // => ["this", "Is", "A", "String", "To", "Split"]
 */
function words(subject, pattern, flags) {
    subject = coerceToString(subject);
    const sansUnderscores = subject.replace(/_/g, " ");
    let regexp;
    if (isNil(pattern)) {
        let ws = unicode_default_word_boundary_1.split(sansUnderscores).filter((word) => !regexp_js_1.IS_PUNCTUATION.test(word));
        ws = ws.map((w) => {
            regexp = regexp_js_1.REGEXP_EXTENDED_ASCII.test(w) ? regexp_js_1.REGEXP_LATIN_WORD : regexp_js_1.REGEXP_WORD;
            if (regexp.test(w)) {
                return [...w.match(regexp)];
            }
            return w;
        });
        ws = ws.reduce((acc, w) => {
            if (Array.isArray(w)) {
                w.forEach((word) => acc.push(word));
                return acc;
            }
            return [...acc, w];
        }, []);
        return ws;
    }
    else if (regexp_js_1.isRegExp(pattern)) {
        regexp = pattern;
    }
    else {
        const flagString = coerceToString(nilDefault(flags, ""));
        regexp = new RegExp(coerceToString(pattern), flagString);
    }
    return nilDefault(w.match(regexp), []);
}
exports.default = words;
