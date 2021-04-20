import su from "../../src";

describe("Decode an array of Unicode code points into its string value", () => {
  test("It should decode an array of ASCII character values", () => {
    const input = [0x0068, 0x0065, 0x006c, 0x006c, 0x006f];

    expect(su.decodeCodePoints(input)).toEqual("hello");
  });

  test("It should decode a string where each character is multiple code points", () => {
    const input = [0xd83d, 0xde01, 0xd83d, 0xdc36, 0xd83c, 0xdf55];
    const output = "😁🐶🍕";

    expect(su.decodeCodePoints(input)).toEqual("😁🐶🍕");
  });
});
