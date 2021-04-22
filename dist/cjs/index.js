"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripPunc = exports.words = exports.scalars = exports.graphemes = exports.isString = exports.join = exports.encodeUTF16 = exports.encodeUTF8 = exports.encodeCodePoints = exports.decodeUTF16 = exports.decodeUTF8 = exports.decodeCodePoints = exports.snakeCase = exports.pascalCase = exports.kebabCase = exports.downcase = exports.decapitalize = exports.capitalize = exports.camelCase = void 0;
/**
 * Functions to change string casing
 * @namespace Case
 */
const camelcase_js_1 = __importDefault(require("./case/camelcase.js"));
exports.camelCase = camelcase_js_1.default;
const capitalize_js_1 = __importDefault(require("./case/capitalize.js"));
exports.capitalize = capitalize_js_1.default;
const decapitalize_js_1 = __importDefault(require("./case/decapitalize.js"));
exports.decapitalize = decapitalize_js_1.default;
const downcase_js_1 = __importDefault(require("./case/downcase.js"));
exports.downcase = downcase_js_1.default;
const kebabcase_js_1 = __importDefault(require("./case/kebabcase.js"));
exports.kebabCase = kebabcase_js_1.default;
const pascalcase_js_1 = __importDefault(require("./case/pascalcase.js"));
exports.pascalCase = pascalcase_js_1.default;
const snakecase_js_1 = __importDefault(require("./case/snakecase.js"));
exports.snakeCase = snakecase_js_1.default;
/**
 * Functions to encode and decode strings
 * @namespace Encode
 */
const decodecodepoints_js_1 = __importDefault(require("./encode/decodecodepoints.js"));
exports.decodeCodePoints = decodecodepoints_js_1.default;
const decodeutf8_js_1 = __importDefault(require("./encode/decodeutf8.js"));
exports.decodeUTF8 = decodeutf8_js_1.default;
const decodeutf16_js_1 = __importDefault(require("./encode/decodeutf16.js"));
exports.decodeUTF16 = decodeutf16_js_1.default;
const encodecodepoints_js_1 = __importDefault(require("./encode/encodecodepoints.js"));
exports.encodeCodePoints = encodecodepoints_js_1.default;
const encodeutf8_js_1 = __importDefault(require("./encode/encodeutf8.js"));
exports.encodeUTF8 = encodeutf8_js_1.default;
const encodeutf16_js_1 = __importDefault(require("./encode/encodeutf16.js"));
exports.encodeUTF16 = encodeutf16_js_1.default;
/**
 * Functions to join strings
 * @namespace Join
 */
const join_js_1 = __importDefault(require("./join/join.js"));
exports.join = join_js_1.default;
/**
 * Functions to query strings
 * @namespace Query
 */
const isstring_js_1 = __importDefault(require("./query/isstring.js"));
exports.isString = isstring_js_1.default;
/**
 * Functions to split a string
 * @namespace Split
 */
const graphemes_js_1 = __importDefault(require("./split/graphemes.js"));
exports.graphemes = graphemes_js_1.default;
const scalars_js_1 = __importDefault(require("./split/scalars.js"));
exports.scalars = scalars_js_1.default;
const words_js_1 = __importDefault(require("./split/words.js"));
exports.words = words_js_1.default;
/**
 * Functions to strip characters from a string
 */
const strippunc_js_1 = __importDefault(require("./strip/strippunc.js"));
exports.stripPunc = strippunc_js_1.default;
