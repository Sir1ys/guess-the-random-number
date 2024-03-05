const guessTheNumber = require("./index");

describe("guessTheNumber", () => {
  test("return the correct message when the user doesn't guess the number", () => {
    expect(adding(3)).toBe(
      "Sorry, but you didn't guess the number, the number is lower"
    );
  });
});
