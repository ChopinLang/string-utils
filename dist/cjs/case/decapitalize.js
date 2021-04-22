"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@nyxlang/helpers"));
const { coerceToString } = helpers_1.default;
/**
 * @function decapitalize
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject String to decapitalize
 * @param {Object} [options] Optional parameters
 * @param {boolean} [options.lower=false] Downcase the rest of the string if true
 * @param {boolean} [options.all=false] Decapitalize every word in the string if true
 * @param {(string|string[])} [options.locale=en-US] The locale or locales to use
 * @returns {string}
 * @throws {RangeError} if locale is not a valid language tag
 * @throws {TypeError} if an array element in the local param is not a string
 * @example
 * su.decapitalize("THis IS A String To DeCapitalize")
 * // => "tHis IS A String To DeCapitalize"
 * su.decapitalize("THis IS A String To DeCapitalize", { lower: true })
 * // => "this is a string To decapitalize"
 * su.decapitalize("THIS IS A STRING TO DECAPITALIZE", { all: true })
 * // => "tHIS iS a sTRING tO dECAPITALIZE"
 * su.decapitalize("İstanbul", { locale: "TR" })
 * // => "istanbul"
 */
function decapitalize(subject, { lower = false, all = false, locale = "en-US" } = {}) {
    subject = coerceToString(subject);
    let str = subject[0].toLocaleLowerCase(locale) + subject.slice(1);
    if (lower) {
        str = str[0] + str.slice(1).toLocaleLowerCase(locale);
    }
    if (all) {
        const ws = str.split(" ");
        str = ws.reduce((s, w, i, a) => {
            let st = w[0].toLocaleLowerCase(locale) + w.slice(1);
            if (i < a.length - 1) {
                st += " ";
            }
            return s + st;
        }, "");
    }
    return str;
}
exports.default = decapitalize;
