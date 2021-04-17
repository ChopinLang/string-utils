import su from "../../src";

describe("Splitting a string into words and stripping out punctuation", () => {
  test("It should split a string with all Latin characters", () => {
    const input = "The quick (“brown”) fox can’t jump 32.3 feet, right?";
    const output = [
      "The",
      "quick",
      "brown",
      "fox",
      "can’t",
      "jump",
      "32.3",
      "feet",
      "right",
    ];

    expect(su.words(input)).toEqual(output);
  });

  test("It should split a string with non-Latin characters (test 1)", () => {
    const input = "В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!";
    const output = [
      "В",
      "чащах",
      "юга",
      "жил",
      "бы",
      "цитрус",
      "Да",
      "но",
      "фальшивый",
      "экземпляр",
    ];

    expect(su.words(input)).toEqual(output);
  });

  test("It should split a string with non-Latin characters (test 2)", () => {
    const input = "איך בלש תפס גמד רוצח עז קטנה?";
    const output = ["איך", "בלש", "תפס", "גמד", "רוצח", "עז", "קטנה"];

    expect(su.words(input)).toEqual(output);
  });
});
