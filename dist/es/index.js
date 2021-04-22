/**
 * Functions to change string casing
 * @namespace Case
 */
import camelCase from "./case/camelcase.js";
import capitalize from "./case/capitalize.js";
import decapitalize from "./case/decapitalize.js";
import downcase from "./case/downcase.js";
import kebabCase from "./case/kebabcase.js";
import pascalCase from "./case/pascalcase.js";
import snakeCase from "./case/snakecase.js";
/**
 * Functions to encode and decode strings
 * @namespace Encode
 */
import decodeCodePoints from "./encode/decodecodepoints.js";
import decodeUTF8 from "./encode/decodeutf8.js";
import decodeUTF16 from "./encode/decodeutf16.js";
import encodeCodePoints from "./encode/encodecodepoints.js";
import encodeUTF8 from "./encode/encodeutf8.js";
import encodeUTF16 from "./encode/encodeutf16.js";
/**
 * Functions to join strings
 * @namespace Join
 */
import join from "./join/join.js";
/**
 * Functions to query strings
 * @namespace Query
 */
import isString from "./query/isstring.js";
/**
 * Functions to split a string
 * @namespace Split
 */
import graphemes from "./split/graphemes.js";
import scalars from "./split/scalars.js";
import words from "./split/words.js";
/**
 * Functions to strip characters from a string
 */
import stripPunc from "./strip/strippunc.js";
// Can't use object property shorthand because
// then JSDoc names functions incorrectly
export { 
// Case
camelCase, capitalize, decapitalize, downcase, kebabCase, pascalCase, snakeCase, 
// Encode
decodeCodePoints, decodeUTF8, decodeUTF16, encodeCodePoints, encodeUTF8, encodeUTF16, 
// Join
join, 
// Query
isString, 
// Split
graphemes, scalars, words, 
// Strip
stripPunc, };
