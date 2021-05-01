"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const capitalize_js_1 = __importDefault(require("./capitalize.js"));
const words_js_1 = __importDefault(require("../split/words.js"));
const strippunc_js_1 = __importDefault(require("../strip/strippunc.js"));
const { coerceToString } = helpers_1.default;
/**
 * Converts `subject` to {@link https://en.wikipedia.org/wiki/Camel_case camelCase}.
 * @function camelCase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to camelCase
 * @param {(string|string[])} [locale=en-US] The locale or locales to use for capitalization
 * @returns {string} the camelCased string with non-word characters stripped out
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element is not a string
 * @example
 * camelCase("bird flight")
 * // => "birdFlight"
 * camelCase("this_is_a_string")
 * // => "thisIsAString"
 * camelCase("   _-It is istanbul   not constantinople-_ ", "TR")
 * // => "itİsİstanbulNotConstantinople"
 */
function camelCase(subject, locale = "en-US") {
    subject = coerceToString(subject);
    const splitWords = words_js_1.default(subject);
    return splitWords.reduce((str, word, i) => {
        const cased = i == 0
            ? strippunc_js_1.default(word.toLocaleLowerCase(locale))
            : strippunc_js_1.default(capitalize_js_1.default(word, { lower: true, locale }));
        return str + cased;
    }, "");
}
exports.default = camelCase;
