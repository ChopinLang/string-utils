const su = require("../index");

describe("It should properly camelCase words based on their locale information", () => {
  test("A sentence of words, the first word capitalized, separated by spaces", () => {
    let subject = "These are some words";
    expect(su.camelCase(subject)).toEqual("theseAreSomeWords");
  });
});
