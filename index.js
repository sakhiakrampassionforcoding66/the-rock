const playerSelection = document.querySelector("#playerText");
const computerSelection = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

function getComputerChoice(){

  const randNum = Math.floor(Math.random() * 3) + 1;

  switch(randNum){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}




choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerSelection.textContent = `Player: ${player}`;
  computerSelection.textContent = `Computer: ${computer}`;
  resultText.textContent = result();
}));


function result(){
  if(player == computer){
    return "Draw!";
  }
  else if(computer == "ROCK"){
    return (player == "PAPER") ? "You Win!" : "You Lose!"
  }
  else if(computer == "PAPER"){
    return (player == "SCISSORS") ? "You Win!" : "You Lose!"
  }
  else if(computer == "SCISSORS"){
    return (player == "ROCK") ? "You Win!" : "You Lose!"
  }
}
