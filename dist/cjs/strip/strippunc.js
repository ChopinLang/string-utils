"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const regexp_js_1 = require("../helpers/regexp.js");
const { coerceToString } = helpers_1.default;
/**
 * Strip punctuation marks from a string
 *
 * @function stripPunc
 * @static
 * @since 0.0.1
 * @memberof Strip
 * @param {string} subject String to strip punctuation from
 * @returns {string}
 * @example
 * stripPunc("I can't do it, captain!")
 * // => "I cant do it captain"
 */
function stripPunc(subject) {
    subject = coerceToString(subject);
    return subject.replace(regexp_js_1.REGEXP_PUNCTUATION, "");
}
exports.default = stripPunc;
