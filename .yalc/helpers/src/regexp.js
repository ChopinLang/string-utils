/**
 * A function to determine if an object is a RegExp
 * @ignore
 */
function isRegExp(obj) {
  return obj instanceof RegExp;
}

module.exports = { isRegExp };
