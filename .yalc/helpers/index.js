const array = require("./src/array");
const boolean = require("./src/boolean");
const nil = require("./src/nil");
const number = require("./src/number");
const regexp = require("./src/regexp");
const string = require("./src/string");
const symbol = require("./src/symbol");
const value = require("./src/value");

module.exports = {
  ...boolean,
  ...nil,
  ...number,
  ...regexp,
  ...string,
  ...symbol,
  ...value,
};
