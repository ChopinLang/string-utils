import su from "../../src";

describe("Decode array of UTF-16 char codes into a string", () => {
  test("It should decode an ASCII string", () => {
    const input = [0x0068, 0x0065, 0x006c, 0x006c, 0x006f];
    expect(su.decodeUTF16(input)).toEqual("hello");
  });

  test("It should decode a string of characters that require multiple char codes", () => {
    const input = [0xd83d, 0xde01, 0xd83d, 0xdc36, 0xd83c, 0xdf55];
    const output = "😁🐶🍕";

    expect(su.decodeUTF16(input)).toEqual(output);
  });
});
