import * as su from "../../src";

describe("Decode a string from a UTF-8 byte array", () => {
  test("It should decode an encoded ASCII string", () => {
    const input = [0x68, 0x65, 0x6c, 0x6c, 0x6f];
    const output = "hello";

    expect(su.decodeUTF8(input)).toEqual(output);
  });

  test("It should decode an encoded multibyte string", () => {
    const input = [0xf0, 0x9f, 0x98, 0x80, 0xf0, 0x9f, 0x98, 0x81];
    const output = "😀😁";

    expect(su.decodeUTF8(input)).toEqual(output);
  });
});
