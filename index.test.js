const guessTheNumber = require("./index");

describe("guessTheNumber", () => {
  test("return the correct message when the user guess the number", () => {
    expect(guessTheNumber(3)).toBe("Congratulations! Your number is correct!");
  });
});
