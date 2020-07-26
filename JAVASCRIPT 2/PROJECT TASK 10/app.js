
const getUserChoice = () =>{ 
var userInput = "Paper";
userInput = userInput.toLowerCase();
return userInput;
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner() {
  if (userChoice === computerChoice) {
    return "Game is a tie!";  
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!"; 
    } else {
      return "User wins!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!"
    }
  }
}

var userChoice = getUserChoice();
var computerChoice = getComputerChoice();

function playGame() {
  console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()