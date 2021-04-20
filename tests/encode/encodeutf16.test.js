import su from "../../src";

describe("Split a string into numeric JS char codes", () => {
  test("It should split a string of basic Latin characters", () => {
    const input = "hello";
    const output = [104, 101, 108, 108, 111];

    expect(su.encodeUTF16(input)).toEqual(output);
  });

  test("It should split a string of characters that require multiple char codes", () => {
    const input = "😁🐶🍕";
    const output = [55357, 56833, 55357, 56374, 55356, 57173];

    expect(su.encodeUTF16(input)).toEqual(output);
  });
});
