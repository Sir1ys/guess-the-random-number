function startTheGame(userNum, randomNum) {
  console.log(userNum, randomNum);
  if (userNum === randomNum) return "Congratulations! Your number is correct!";
}

function guessTheNumber(userNum) {
  const randomNumber = Math.floor(Math.random() * 4);

  return startTheGame(userNum, randomNumber);
}

module.exports = guessTheNumber;
