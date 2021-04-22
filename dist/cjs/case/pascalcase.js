"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
const words_js_1 = __importDefault(require("../split/words.js"));
const capitalize_js_1 = __importDefault(require("./capitalize.js"));
const strippunc_js_1 = __importDefault(require("../strip/strippunc.js"));
/**
 * Convert a string to PascalCase
 *
 * @function pascalCase
 * @static
 * @since 0.0.1
 * @memberof Case
 * @param {string} subject The string to convert to PascalCase
 * @returns {string}
 * @example
 * su.pascalCase("this IS some TEXT")
 * // => "ThisIsSomeText"
 */
function pascalCase(subject) {
    subject = string_js_1.coerceToString(subject);
    const ws = words_js_1.default(subject);
    return ws.reduce((str, word) => (str += strippunc_js_1.default(capitalize_js_1.default(word, { lower: true }))), "");
}
exports.default = pascalCase;
