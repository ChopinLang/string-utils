/**
 * Checks if `value` is null or undefined. From {@link https://github.com/panzerdp/voca/blob/master/src/helper/object/is_nil.js}
 *
 * @function isNil
 * @ignore
 * @param {*} value
 * @returns {boolean} `true` if value is `null` or `undefined`, else `false`
 */
function isNil(value) {
  return value == null;
}

/**
 * Returns a default if the supplied value is null or undefined
 *
 * @param {*} value The value to check
 * @param {*} defaultValue The value to return if value is nil
 * @returns {*}
 * @ignore
 */
function nilDefault(value, defaultValue) {
  return value == null ? defaultValue : value;
}

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return value === undefined;
}

module.exports = { isNil, isNull, isUndefined, nilDefault };
