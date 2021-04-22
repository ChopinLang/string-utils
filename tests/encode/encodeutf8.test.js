import { su } from "../../src/";

describe("Encode a string into an array of UTF-8 code units (numeric byte values)", () => {
  test("It should encode a string with simple ASCII characters", () => {
    const input = "hello";
    const output = [0x68, 0x65, 0x6c, 0x6c, 0x6f];

    expect(su.encodeUTF8(input)).toEqual(output);
  });

  test("It should encode a multibyte string", () => {
    const input = "😀😁";
    const output = [0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81];

    expect(su.encodeUTF8(input)).toEqual(output);
  });
});
