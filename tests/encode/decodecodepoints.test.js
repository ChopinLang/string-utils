import su from "../../src";

describe("Decode an array of Unicode code points into its string value", () => {
  test("It should decode an array of ASCII character values", () => {
    const input = [0x0068, 0x0065, 0x006c, 0x006c, 0x006f];

    expect(su.decodeCodePoints(input)).toEqual("hello");
  });

  test("It should decode an array where characters are code points that require more than one UTF16 code unit", () => {
    const input = [0x1f601, 0x1f436, 0x1f355];
    const output = "😁🐶🍕";

    expect(su.decodeCodePoints(input)).toEqual(output);
  });

  test("It should decode an array where some characters require multiple code points", () => {
    const input = [0x905, 0x928, 0x941, 0x91a, 0x94d, 0x91b, 0x947, 0x926];
    const output = "अनुच्छेद";

    expect(su.decodeCodePoints(input)).toEqual(output);
  });
});
