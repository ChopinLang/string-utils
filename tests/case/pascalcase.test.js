import { su } from "../../src";

// Skipping because for some reason Jest won't resolve
// the import for the dependency module.
describe("Convert a string to PascalCase", () => {
  test("It should convert a string to PascalCase", () => {
    const input = "this IS some TEXT";
    const output = "ThisIsSomeText";

    expect(su.pascalCase(input)).toEqual(output);
  });
});
