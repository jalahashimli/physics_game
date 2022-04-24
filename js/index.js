var letters = "abcdefghigklmnopqrstuvwxyz";

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the 26 letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

function updateGuessesLeft() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

 function updateLetterToGuess() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log(letterToGuess)
};

 function updateGuessesSoFar() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

function reset() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

window.onkeydown = function(e) {
  guessesLeft--;
  var letter =(e.key).toLowerCase();
  guessedLetters.push(letter);
  console.log(guessedLetters)

  updateGuessesSoFar();
  updateGuessesLeft();

  if (letter === letterToGuess) {

    wins++;
    document.querySelector("#wins").innerHTML = wins;

    reset();
  }

  if (guessesLeft === 0) {

    losses++;
    document.querySelector("#losses").innerHTML = losses;

    reset();
  }
};

