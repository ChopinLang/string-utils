"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Functions to change string casing
 * @namespace Case
 */
const camelcase_1 = __importDefault(require("./case/camelcase"));
const capitalize_1 = __importDefault(require("./case/capitalize"));
const decapitalize_1 = __importDefault(require("./case/decapitalize"));
const downcase_1 = __importDefault(require("./case/downcase"));
const kebabcase_1 = __importDefault(require("./case/kebabcase"));
const pascalcase_1 = __importDefault(require("./case/pascalcase"));
const snakecase_1 = __importDefault(require("./case/snakecase"));
/**
 * Functions to encode and decode strings
 * @namespace Encode
 */
const decodecodepoints_1 = __importDefault(require("./encode/decodecodepoints"));
const decodeutf8_1 = __importDefault(require("./encode/decodeutf8"));
const decodeutf16_1 = __importDefault(require("./encode/decodeutf16"));
const encodecodepoints_1 = __importDefault(require("./encode/encodecodepoints"));
const encodeutf8_1 = __importDefault(require("./encode/encodeutf8"));
const encodeutf16_1 = __importDefault(require("./encode/encodeutf16"));
/**
 * Functions to join strings
 * @namespace Join
 */
const join_1 = __importDefault(require("./join/join"));
/**
 * Functions to query strings
 * @namespace Query
 */
const isstring_1 = __importDefault(require("./query/isstring"));
/**
 * Functions to split a string
 * @namespace Split
 */
const graphemes_1 = __importDefault(require("./split/graphemes"));
const scalars_1 = __importDefault(require("./split/scalars"));
const words_1 = __importDefault(require("./split/words"));
/**
 * Functions to strip characters from a string
 */
const strippunc_1 = __importDefault(require("./strip/strippunc"));
// Can't use object property shorthand because
// then JSDoc names functions incorrectly
exports.default = {
    // Case
    camelCase: camelcase_1.default,
    capitalize: capitalize_1.default,
    decapitalize: decapitalize_1.default,
    downcase: downcase_1.default,
    kebabCase: kebabcase_1.default,
    pascalCase: pascalcase_1.default,
    snakeCase: snakecase_1.default,
    // Encode
    decodeCodePoints: decodecodepoints_1.default,
    decodeUTF8: decodeutf8_1.default,
    decodeUTF16: decodeutf16_1.default,
    encodeCodePoints: encodecodepoints_1.default,
    encodeUTF8: encodeutf8_1.default,
    encodeUTF16: encodeutf16_1.default,
    // Join
    join: join_1.default,
    // Query
    isString: isstring_1.default,
    // Split
    graphemes: graphemes_1.default,
    scalars: scalars_1.default,
    words: words_1.default,
    // Strip
    stripPunc: strippunc_1.default,
};
