import su from "../../src";

// Skipping because importing words breaks Jest due to issues with importing dependency
describe("Capitalize the first letter of a string according to options passed into the function", () => {
  test("It should capitalize the first character of a string", () => {
    const input = "this IS a STRING to CAPITALIZE";
    const output = "This IS a STRING to CAPITALIZE";

    expect(su.capitalize(input)).toEqual(output);
  });

  test("It should properly capitalize a string and lowercase the rest when lower = true", () => {
    const input = "thIs Is a String to CAPITALIZE";
    const output = "This is a string to capitalize";

    expect(su.capitalize(input, { lower: true })).toEqual(output);
  });

  test("It should capitalize every word in the string when all = true", () => {
    const input = "this iS a stRInG tO capITalIzE";
    const output = "This IS A StRInG TO CapITalIzE";

    expect(su.capitalize(input, { all: true })).toEqual(output);
  });

  test("It should capitalize every word and lowercase all other characters when lower = true and all = true", () => {
    const input = "tHIS iS a sTRING tO cAPITALIZE";
    const output = "This Is A String To Capitalize";

    expect(su.capitalize(input, { all: true, lower: true }));
  });

  test("It should properly capitalize a string according to its locale", () => {
    expect(su.capitalize("istanbul", { locale: "TR" })).toEqual("İstanbul");
  });
});
