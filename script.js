const minNumber = 1;
const maxNumber = 10;
let targetNumber = generateRandomNumber(minNumber, maxNumber);
let attempts = 0;

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
    feedback.textContent = "Please enter a valid number between 1 and 10.";
    return;
  }

  attempts++;

  if (userGuess === targetNumber) {
    const attemptText = attempts === 1 ? "attempt" : "attempts";
    feedback.textContent = `Congratulations! You guessed the correct number, which was ${targetNumber}, and it took you ${attempts} ${attemptText}.`;
    guessButton.disabled = true;
  } else if (userGuess < targetNumber) {
    feedback.textContent = "Higher";
  } else {
    feedback.textContent = "Lower";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}