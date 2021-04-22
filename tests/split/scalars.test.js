import { su } from "../../src";

describe("Split a string into an array of Unicode scalar values", () => {
  test("It should split a simple ASCII string", () => {
    const input = "hello";
    const output = ["h", "e", "l", "l", "o"];

    expect(su.scalars(input)).toEqual(output);
  });

  test("It should split a string whose characters require more than one UTF16 code unit", () => {
    const input = "😁🐶🍕";
    const output = ["😁", "🐶", "🍕"];

    expect(su.scalars(input)).toEqual(output);
  });
});
