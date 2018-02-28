// My first attempt at the Rock Paper Scissor project from the Odin project
// This code is designed to run in the browser console only for the moment

var cpu;
var player;
var cscore = 0;
var pscore = 0;

function computerPlay() {
  let roll = Math.floor(Math.random() * 3);
  if (roll == 0) {
    cselection = "Rock";
    return cselection.toUpperCase();
  } else if (roll == 1) {
    cselection = "Paper";
    return cselection.toUpperCase();
  } else if (roll == 2) {
    cselection = "Scissor";
    return cselection.toUpperCase();
  } 
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "You both chose " + computerSelection + ", it is a draw"; 
  } else if (computerSelection == "ROCK" && playerSelection == "SCISSOR") {
    cscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Computer Wins";
  } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
    pscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Player Wins!";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    cscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Computer Wins";
  } else if (computerSelection == "PAPER" && playerSelection == "SCISSOR") {
    pscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Player Wins!";
  } else if (computerSelection == "SCISSOR" && playerSelection == "PAPER") {
    cscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Computer Wins";
  } else if (computerSelection == "SCISSOR" && playerSelection == "ROCK") {
    pscore++;
    return "Computer chose " + computerSelection + " Player chose " + playerSelection + " Player Wins!"; 
  } else {
    return "Player made an invalid choice";
  }
}

function playerPlay() {
  playerSelection = prompt("Please enter your choice: Rock, Paper or Scissors");
  return playerSelection.toUpperCase();
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Current score is: " + cscore + " points for computer and " + pscore + " points for the player");
  }
  console.log("Final Score is: " + cscore + " points for computer and " + pscore + " points for the player");
}

game();
