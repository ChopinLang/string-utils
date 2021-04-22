/**
 * Checks if `value` is null or undefined. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/object/is_nil.js}
 *
 * @function isNil
 * @ignore
 * @param {*} value
 * @returns {boolean} `true` if value is `null` or `undefined`, else `false`
 */
export function isNil(value: any): boolean;
/**
 * Returns a default if the supplied value is null or undefined
 *
 * @param {*} value The value to check
 * @param {*} defaultValue The value to return if value is nil
 * @returns {*}
 * @ignore
 */
export function nilDefault(value: any, defaultValue: any): any;
export function isNull(value: any): boolean;
export function isUndefined(value: any): boolean;
