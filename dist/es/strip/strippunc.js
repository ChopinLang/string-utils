import { coerceToString } from "../helpers/string.js";
import { REGEXP_PUNCTUATION } from "../helpers/regexp.js";
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
export default function stripPunc(subject) {
    subject = coerceToString(subject);
    return subject.replace(REGEXP_PUNCTUATION, "");
}
