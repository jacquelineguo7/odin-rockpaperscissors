
var humanScore = 0;
var computerScore = 0;


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
    
    if (userInput == "rock") {
        return "rock";
    }
    else if (userInput == "paper") {
        return "paper";
    }
    else if (userInput == "scissors") {
        return "scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human == computer) {
        console.log(`Draw! ${human} and ${computer} are the same.` )
    }
    else if (human == "rock") {
        if (computer == "paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (human == "paper") {
        if (computer == "scissors") {
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        }
        else {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    }
    else if (human == "scissors") {
        if (computer == "rock") {
            console.log("You lose! Rock beats Scissors.")
            computerScore++;
        }
        else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }
}

