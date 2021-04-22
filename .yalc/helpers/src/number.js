function isNumber(obj) {
  return (
    typeof obj == "number" || (typeof obj == "object" && obj instanceof Number)
  );
}

function isBigInt(obj) {
  return typeof obj == "bigint";
}

function handleNegativeIndex(index, seq) {
  if (index < 0) {
    index = seq.length + index;
  }
  return index;
}

function valueOf(number) {
  // cast to number to handle BigInts
  return Number(number.valueOf());
}

module.exports = { handleNegativeIndex, isBigInt, isNumber, valueOf };
