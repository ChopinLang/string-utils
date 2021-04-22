import * as su from "../../src";

describe("Convert a string to snake_case", () => {
  test("It should convert a string to snake_case", () => {
    const input = "This is a string";
    const output = "this_is_a_string";

    expect(su.snakeCase(input)).toEqual(output);
  });

  test("It should convert a string to upper snake_case when upper = true", () => {
    const input = "thisIsAString";
    const output = "THIS_IS_A_STRING";

    expect(su.snakeCase(input, { upper: true })).toEqual(output);
  });
});
