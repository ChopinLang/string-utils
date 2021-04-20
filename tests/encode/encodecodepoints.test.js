import su from "../../src";

describe("Split a string into an array of its Unicode code points", () => {
  test("It should split a simple ASCII string", () => {
    const input = "hello";
    const output = [0x0068, 0x0065, 0x006c, 0x006c, 0x006f];

    expect(su.encodeCodePoints(input)).toEqual(output);
  });

  test("It should split a string with multiple code points per character", () => {
    const input = "😁🐶🍕";
    const output = [0x1f601, 0x1f436, 0x1f355];

    expect(su.encodeCodePoints(input)).toEqual(output);
  });
});
