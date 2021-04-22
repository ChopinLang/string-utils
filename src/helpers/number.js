export function isNumber(obj) {
  return (
    typeof obj == "number" || (typeof obj == "object" && obj instanceof Number)
  );
}

export function isBigInt(obj) {
  return typeof obj == "bigint";
}
