import su from "../../src";

describe("Split a string into its extended grapheme clusters", () => {
  test("It should split a simple string where code points correspond to grapheme clusters", () => {
    const input = "hello";
    const output = ["h", "e", "l", "l", "o"];

    expect(su.graphemes(input)).toEqual(output);
  });

  test("It should split a string where a grapheme cluster is more than one code point", () => {
    const input = "अनुच्छेद";
    const output = ["अ", "नु", "च्", "छे", "द"];

    expect(su.graphemes(input)).toEqual(output);
  });
});
