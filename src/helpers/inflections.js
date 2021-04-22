import { DOWNCASED_WORDS } from "./constants.js";

/**
 * Support for acronyms and other humanization features that enable text
 * processing more like natural speech. See {@link https://github.com/andrewplummer/Sugar/blob/master/lib/inflections.js}
 *
 * @module Inflections
 * @namespace String
 */

let InflectionSet;
