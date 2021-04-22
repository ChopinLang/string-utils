import * as su from "../../src";

describe("Join an array of Unicode scalar values, often called 'characters' and represented by single Unicode code points", () => {
  test("Join an array of simple ASCII characters", () => {
    const input = ["h", "e", "l", "l", "o"];
    const output = "hello";

    expect(su.join(input)).toEqual(output);
  });

  test("Join an array of scalars represented by higher code points", () => {
    const input = ["😁", "🐶", "🍕"];
    const output = "😁-🐶-🍕";

    expect(su.join(input, "-")).toEqual(output);
  });
});
