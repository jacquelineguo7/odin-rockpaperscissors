function getComputerChoice () {
    if (Math.random() <= (1 / 3)) {
        return "rock";
    }
    else if (Math.random() <= (2 / 3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice () {
    let userInput = prompt("Rock, Paper, or Scissors?");
    
    if (userInput == "rock" || userInput == "Rock") {
        return "rock";
    }
    else if (userInput == "paper" || userInput == "Paper") {
        return "paper";
    }
    else if (userInput == "scissors" || userInput == "Scissors") {
        return "scissors";
    }
}