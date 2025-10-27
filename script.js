const playerChoiceBtns = document.querySelectorAll("button");
const messageBox = document.querySelector(".game-msg-container");
const playerScore = document.querySelector(".player-score > .score-txt");
const computerScore = document.querySelector(".computer-score > .score-txt");

playerChoiceBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    let roundWinner = playRound(playerChoice, getComputerChoice());
    updateScoreBoard(roundWinner);

    // check for game win
    if (playerScore.textContent == 5) {
      alert("Game over. YOU WON!");
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    } else if (computerScore.textContent == 5) {
      alert("Game over. You lost.");
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    }
  });
})

// Get computer choice
function getComputerChoice() {
  let index = Math.floor(Math.random()*3);
  switch (index) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Play a single round
function playRound(playerChoice, computerChoice) {
  // Check for tie, player win, or computer win and return the result
  if (playerChoice === computerChoice) {
    // tie
    return 'tie';
  } else if (
              (playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock') ||
              (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
    
    return 'player';
  } else {
    // computer win
    return 'computer';
  }
}

// Update score
function updateScoreBoard(winner) {
  if (winner == 'player') {
    playerScore.textContent = Number(playerScore.textContent) + 1;
    messageBox.textContent = "You win!";
  } else if (winner == 'computer') {
    computerScore.textContent = Number(computerScore.textContent) + 1;
    messageBox.textContent = "You lose...";
  } else if (winner == 'tie') {
    messageBox.textContent = "Draw. Try again.";
  }
}
