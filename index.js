const prompt = require("prompt-sync")({ sigint: true });

function startTheGame(userNum, randomNumber, attemptCount) {
  let newUserNum = parseInt(userNum);

  switch (true) {
    case newUserNum === randomNumber:
      return "Congratulations! You win the game!";
    case attemptCount === 3:
      return "Sorry, you lost the game!";
    case newUserNum < randomNumber:
      newUserNum = prompt(
        "Your number is lower than random one! Write another number: "
      );
      break;
    case newUserNum > randomNumber:
      newUserNum = prompt(
        "Your number is higher than random one! Write another number: "
      );
      break;
    default:
      break;
  }
  attemptCount += 1;

  return startTheGame(newUserNum, randomNumber, attemptCount);
}

function guessTheNumber() {
  let attemptCount = 1;
  const userNum = prompt("Write your number here: ");
  const randomNumber = Math.floor(Math.random() * 14);

  return startTheGame(userNum, randomNumber, attemptCount);
}

module.exports = guessTheNumber;
