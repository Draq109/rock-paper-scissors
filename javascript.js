function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1: return "paper";
        case 2: return "scissors";
        case 3: return "rock";
        default: return "error";
    }
}

function validInput(str) {
    return (/^[a-zA-Z]+$/.test(str) &&
        str.toLowerCase() == "rock" ||
        str.toLowerCase() == "paper" ||
        str.toLowerCase() == "scissors")
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


let wins = 0, losses = 0, ties = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let para = document.querySelector('.paragraph');
let tryAgain = document.querySelector('.restart-button');

if (wins + losses + ties < 5) {
    rock.addEventListener('click', () => {
        let result = gameInstance('rock', getComputerChoice());
        if (result.includes("You lose")) {
            losses++;
            para.textContent = "You lose";
        }
        else if (result.includes("You win")) {
            wins++;
            para.textContent = "You win";
        }
        else {
            ties++
            para.textContent = "Tie"
        }

        if (wins + ties + losses >= 5) {
            if (ties == 5 || wins == losses)
                para.textContent = "Nobody wins the set. Try again?";
            else if (wins > losses)
                para.textContent = "You won the set! Play again?";
            else
                para.textContent = "You lose the set. Try again?";
            tryAgain.style.visibility = "visible";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });

    paper.addEventListener('click', () => {
        let result = gameInstance('paper', getComputerChoice());
        if (result.includes("You lose")) {
            losses++;
            para.textContent = "You lose";
        }
        else if (result.includes("You win")) {
            wins++;
            para.textContent = "You win";
        }
        else {
            ties++
            para.textContent = "Tie"
        }

        if (wins + ties + losses >= 5) {
            if (ties == 5 || wins == losses)
                para.textContent = "Nobody wins the set. Try again?";
            else if (wins > losses)
                para.textContent = "You won the set! Play again?";
            else
                para.textContent = "You lose the set. Try again?";
            tryAgain.style.visibility = "visible";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });

    scissors.addEventListener('click', () => {
        let result = gameInstance('scissors', getComputerChoice());
        if (result.includes("You lose")) {
            losses++;
            para.textContent = "You lose";
        }
        else if (result.includes("You win")) {
            wins++;
            para.textContent = "You win";
        }
        else {
            ties++
            para.textContent = "Tie"
        }

        if (wins + ties + losses >= 5) {
            if (ties == 5 || wins == losses)
                para.textContent = "Nobody wins the set. Try again?";
            else if (wins > losses)
                para.textContent = "You won the set! Play again?";
            else
                para.textContent = "You lose the set. Try again?";
            tryAgain.style.visibility = "visible";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });
}

tryAgain.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    para.textContent = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    tryAgain.style.visibility = "hidden";
})



