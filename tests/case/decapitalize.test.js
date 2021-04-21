import su from "../../src";

// Skipping because su.words imports a dependency that breaks Jest
describe("Decapitalize a string based on the options passed in", () => {
  test("It should decapitalize the first character in a string", () => {
    expect(su.decapitalize("This Is A String")).toEqual("this Is A String");
  });

  test("It should lowercase the rest of the string when lower = true", () => {
    expect(su.decapitalize("THIS is A StRiNG", { lower: true })).toEqual(
      "this is a string"
    );
  });

  test("It should lowercase every word when all = true", () => {
    expect(su.decapitalize("THIS IS A STRING", { all: true })).toEqual(
      "tHIS iS a sTRING"
    );
  });

  test("It should decapitalize based on locale information passed into the function", () => {
    expect(su.decapitalize("İstanbul", { locale: "TR" })).toEqual("istanbul");
  });
});
