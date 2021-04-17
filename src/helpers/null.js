/**
 * Returns a default if the supplied value is null or undefined
 *
 * @param {*} value The value to check
 * @param {*} defaultValue The value to return if value is nil
 * @returns {*}
 * @ignore
 */
export function nilDefault(value, defaultValue) {
  return value == null ? defaultValue : value;
}
