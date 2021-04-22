"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Functions to change string casing
 * @namespace Case
 */
const camelcase_js_1 = __importDefault(require("./case/camelcase.js"));
const capitalize_js_1 = __importDefault(require("./case/capitalize.js"));
const decapitalize_js_1 = __importDefault(require("./case/decapitalize.js"));
const downcase_js_1 = __importDefault(require("./case/downcase.js"));
const kebabcase_js_1 = __importDefault(require("./case/kebabcase.js"));
const pascalcase_js_1 = __importDefault(require("./case/pascalcase.js"));
const snakecase_js_1 = __importDefault(require("./case/snakecase.js"));
/**
 * Functions to encode and decode strings
 * @namespace Encode
 */
const decodecodepoints_js_1 = __importDefault(require("./encode/decodecodepoints.js"));
const decodeutf8_js_1 = __importDefault(require("./encode/decodeutf8.js"));
const decodeutf16_js_1 = __importDefault(require("./encode/decodeutf16.js"));
const encodecodepoints_js_1 = __importDefault(require("./encode/encodecodepoints.js"));
const encodeutf8_js_1 = __importDefault(require("./encode/encodeutf8.js"));
const encodeutf16_js_1 = __importDefault(require("./encode/encodeutf16.js"));
/**
 * Functions to join strings
 * @namespace Join
 */
const join_js_1 = __importDefault(require("./join/join.js"));
/**
 * Functions to query strings
 * @namespace Query
 */
const isstring_js_1 = __importDefault(require("./query/isstring.js"));
/**
 * Functions to split a string
 * @namespace Split
 */
const graphemes_js_1 = __importDefault(require("./split/graphemes.js"));
const scalars_js_1 = __importDefault(require("./split/scalars.js"));
const words_js_1 = __importDefault(require("./split/words.js"));
/**
 * Functions to strip characters from a string
 */
const strippunc_js_1 = __importDefault(require("./strip/strippunc.js"));
// Can't use object property shorthand because
// then JSDoc names functions incorrectly
exports.default = {
    // Case
    camelCase: camelcase_js_1.default,
    capitalize: capitalize_js_1.default,
    decapitalize: decapitalize_js_1.default,
    downcase: downcase_js_1.default,
    kebabCase: kebabcase_js_1.default,
    pascalCase: pascalcase_js_1.default,
    snakeCase: snakecase_js_1.default,
    // Encode
    decodeCodePoints: decodecodepoints_js_1.default,
    decodeUTF8: decodeutf8_js_1.default,
    decodeUTF16: decodeutf16_js_1.default,
    encodeCodePoints: encodecodepoints_js_1.default,
    encodeUTF8: encodeutf8_js_1.default,
    encodeUTF16: encodeutf16_js_1.default,
    // Join
    join: join_js_1.default,
    // Query
    isString: isstring_js_1.default,
    // Split
    graphemes: graphemes_js_1.default,
    scalars: scalars_js_1.default,
    words: words_js_1.default,
    // Strip
    stripPunc: strippunc_js_1.default,
};
