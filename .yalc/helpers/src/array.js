function isArray(obj) {
  return Array.isArray(obj);
}

function isArrayLike(obj) {
  return (
    isArray(obj) ||
    (!!obj &&
      typeof obj == "object" &&
      typeof obj.length == "number" &&
      obj.length === 0) ||
    (obj.length > 0 && obj.length - 1 in obj)
  );
}

module.exports = { isArray, isArrayLike };
