function isBoolean(obj) {
  return (
    typeof obj == "boolean" ||
    (typeof obj == "object" && obj instanceof Boolean)
  );
}

module.exports = { isBoolean };
