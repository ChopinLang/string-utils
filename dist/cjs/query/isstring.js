"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if an object is a string. From {@link https://github.com/panzerdp/voca/blob/master/src/query/is_string.js}
 *
 * @function isString
 * @static
 * @since 0.0.1
 * @memberof Query
 * @function isString
 * @param {*} value The value to check
 * @returns {boolean} `true` if string
 */
function isString(value) {
    return (typeof value == "string" ||
        (typeof value == "object" && value instanceof String));
}
exports.default = isString;
