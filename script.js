let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, generateTarget) =>
  Math.abs(target - humanGuess) <= Math.abs(target - computerGuess);

const updateScore = userWins => {
  if (userWins) humanScore++;
  else computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
