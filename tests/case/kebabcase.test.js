import * as su from "../../src";

describe("Convert a string to kebab case", () => {
  test("It should convert a string with spaces", () => {
    const input = "Convert this to kebab case";
    const output = "convert-this-to-kebab-case";

    expect(su.kebabCase(input)).toEqual(output);
  });

  test("It should convert a camelCase string", () => {
    const input = "convertThisToKebabCase";
    const output = "convert-this-to-kebab-case";

    expect(su.kebabCase(input)).toEqual(output);
  });
});
