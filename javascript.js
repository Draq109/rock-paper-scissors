function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1: return "paper";
        case 2: return "scissors";
        case 3: return "rock";
        default: return "error";
    }
}

function gameInstance(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock")
            return "You win! Paper beats Rock";
        else if (computerSelection == "paper")
            return "Its a tie!";
        else
            return "You lose! Scissors beat paper";
    }

    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock")
            return "You lose! Rock beats Scissors";
        else if (computerSelection == "paper")
            return "You win! Scissors beats Paper";
        else
            return "Its a tie!";
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock")
            return "Its a tie!";
        else if (computerSelection == "paper")
            return "You lose! Paper beats Rock";
        else
            return "You win! Rock beats Scissors";
    }
}
