import { su } from "../../src";

describe("Split a string into an array of its Unicode code points", () => {
  test("It should split a simple ASCII string", () => {
    const input = "hello";
    const output = [0x0068, 0x0065, 0x006c, 0x006c, 0x006f];

    expect(su.encodeCodePoints(input)).toEqual(output);
  });

  test("It should split a string with code points outside the ASCII range that require multiple UTF16 code units", () => {
    const input = "😁🐶🍕";
    const output = [0x1f601, 0x1f436, 0x1f355];

    expect(su.encodeCodePoints(input)).toEqual(output);
  });

  test("It should split a string where some characters require multiple code points", () => {
    const input = "अनुच्छेद";
    const output = [0x905, 0x928, 0x941, 0x91a, 0x94d, 0x91b, 0x947, 0x926];

    expect(su.encodeCodePoints(input)).toEqual(output);
  });
});
