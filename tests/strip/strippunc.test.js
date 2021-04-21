import su from "../../src";

describe("Strip the punctuation characters from a string", () => {
  test("It should strip punctuation from a string", () => {
    const input = "I can't do it, captain!";
    const output = "I cant do it captain";

    expect(su.stripPunc(input)).toEqual(output);
  });
});
