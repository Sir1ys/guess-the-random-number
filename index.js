function startTheGame(userNum, randomNum, attemptCount) {
  if (userNum === randomNum) return "Congratulations! Your number is correct!";

  if (attemptCount > 3) return "Sorry, you lost the game!";
  attemptCount += 1;

  return startTheGame(userNum, randomNum, attemptCount);
}

function guessTheNumber(userNum) {
  let attemptCount = 0;
  const randomNumber = Math.floor(Math.random() * 4);

  return startTheGame(userNum, randomNumber, attemptCount);
}

module.exports = guessTheNumber;
