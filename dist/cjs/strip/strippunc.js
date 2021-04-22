"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
const regexp_js_1 = require("../helpers/regexp.js");
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
 * su.stripPunc("I can't do it, captain!")
 * // => "I cant do it captain"
 */
function stripPunc(subject) {
    subject = string_js_1.coerceToString(subject);
    return subject.replace(regexp_js_1.REGEXP_PUNCTUATION, "");
}
exports.default = stripPunc;
