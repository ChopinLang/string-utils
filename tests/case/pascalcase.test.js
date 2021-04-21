import su from "../../src";

describe.skip("Convert a string to PascalCase", () => {
  test("It should convert a string to PascalCase", () => {
    const input = "this IS some TEXT";
    const output = "ThisIsSomeText";

    expect(su.pascalCase(input)).toEqual(output);
  });
});
