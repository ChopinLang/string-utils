"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coerceToString = void 0;
const null_js_1 = require("./null.js");
const isstring_js_1 = __importDefault(require("../query/isstring.js"));
/**
 * Coerce a value to its string representation. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/string/coerce_to_string.js}
 *
 * @ignore
 * @function coerceToString
 * @param {*} value To coerce to a string
 * @returns {string}
 */
function coerceToString(value) {
    if (null_js_1.isNil(value)) {
        return "";
    }
    if (isstring_js_1.default(value)) {
        return value;
    }
    return String(value);
}
exports.coerceToString = coerceToString;
