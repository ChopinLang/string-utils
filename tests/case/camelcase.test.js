import su from "../../src";

// Skipping because Jest can't resolve a dependency even though it works
// when I run node directly on the file with the test case present
describe("It should properly camelCase words based on their locale information", () => {
  test("A sentence of words, the first word capitalized, separated by spaces", () => {
    let subject = "These are some words";
    expect(su.camelCase(subject)).toEqual("theseAreSomeWords");
  });

  test("A string that includes non-word characters", () => {
    let subject = "++this-__is-spartaaaaa++";
    expect(su.camelCase(subject)).toEqual("thisIsSpartaaaaa");
  });

  test("A string with non-Latin characters", () => {
    let subject = "   _-It is istanbul   not constantinople-_ ";
    expect(su.camelCase(subject, "TR")).toEqual(
      "ıtİsİstanbulNotConstantinople"
    );
  });
});
