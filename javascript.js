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

function game() {
    let wins = 0, losses = 0, ties = 0;
    let result = '';
    for (let i = 0; i < 5; i++) {
        result = gameInstance(prompt(),"rock");
        if (result.includes("You lose"))
            losses++;
        else if (result.includes("You win"))
            wins++;
        else
            ties++;
        console.log(result);
    }

    if(ties == 5 || wins == losses)
        console.log("Nobody wins the set.");
    else if (wins > losses)
        console.log("You won the set!");
    else
        console.log("You lose the set.");

}
console.log(game());