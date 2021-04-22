import su from "../../src";

describe("Convert a string to lowercase", () => {
  test("It should convert a string to lowercase", () => {
    const input = "This Is a STRING";
    const output = "this is a string";

    expect(su.downcase(input)).toEqual(output);
  });

  test("It should convert based on the locale passed into the function", () => {
    const input = "İSTANBUL";
    const output = "i̇stanbul";

    expect(su.downcase(input)).toEqual(output);
  });
});
