// Get DOM elements
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const playAgainButton = document.getElementById('play-again');

// Game variables
let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

// Function to handle player's choice and game logic
function handlePlayerChoice(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = checkWinner(playerChoice, computerChoice);

  let roundResult = '';
  if (winner === 'Player') {
    playerScore++;
    roundResult = `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (winner === 'Computer') {
    computerScore++;
    roundResult = `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else {
    roundResult = "It's a Tie!";
  }

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
  resultElement.textContent = roundResult;

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}


// Function to end the game and display the result
function endGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  let resultMessage = '';
  if (playerScore === 5) {
    resultMessage = 'Congratulations! You win!';
  } else if (computerScore === 5) {
    resultMessage = 'Computer wins!';
  }
  resultElement.textContent = resultMessage;
  playAgainButton.style.display = 'block';
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = 'Player: 0';
  computerScoreElement.textContent = 'Computer: 0';
  resultElement.textContent = '';
  playAgainButton.style.display = 'none';
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

// Event listeners for button clicks
rockButton.addEventListener('click', () => {
  handlePlayerChoice('rock');
});

paperButton.addEventListener('click', () => {
  handlePlayerChoice('paper');
});

scissorsButton.addEventListener('click', () => {
  handlePlayerChoice('scissors');
});

playAgainButton.addEventListener('click', () => {
  resetGame();
});
