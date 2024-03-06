const guessTheNumber = require("./index");

describe("guessTheNumber", () => {
  test("return the correct message when the user guess the number", () => {
    expect(guessTheNumber()).toBe("Congratulations! You win the game!");
  });

  test("return the correct message when the user lost the game", () => {
    expect(guessTheNumber()).toBe("Sorry, you lost the game!");
  });
});
