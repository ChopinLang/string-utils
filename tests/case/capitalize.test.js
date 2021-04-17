import su from "../../src";

describe("Capitalize the first letter of a string and lowercase the rest", () => {
  test("It should properly capitalize a string", () => {
    const input = "thIs Is a String to CAPITALIZE";
    const output = "This is a string to capitalize";

    expect(su.capitalize(input)).toEqual(output);
  });

  test("It should properly capitalize a string according to its locale", () => {
    expect(su.capitalize("İstanbul", "TR")).toEqual("İstanbul");
  });
});
