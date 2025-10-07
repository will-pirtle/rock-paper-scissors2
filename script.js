
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

// Get human choice
function getPlayerChoice() {
  let playerChoice = prompt("Choose your weapon: (Rock, Paper, or Scissors)").toLowerCase();
  return playerChoice;
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

// Play whole game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsRemaining = 5;

  while (roundsRemaining > 0) {
    // Get new player choice and computer choice
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    // Play a round and store result in 'roundWinner'
    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner == 'player') {
      playerScore++;
      console.log('You won!');
      console.log(`Player score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
      roundsRemaining--;             
    } else if (roundWinner == 'computer') {
      computerScore++;
      console.log('You lost.');
      console.log(`Player score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
      roundsRemaining--;
    } else {
      console.log('You tied. Replay round.')
    }
  }

  // End the game
  console.log('GAME OVER!');
  if (playerScore > computerScore) {
    console.log('You won! Congrats!');
  } else {
    console.log('You lost. Better luck next time.')
  }  
}

