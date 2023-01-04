function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors"; 
    let getRandomValue = Math.random();
    // console.log(getRandomValue);

    if (getRandomValue <= 0.33) {
        //console.log(rock);
        return rock;
    }
    else if (getRandomValue <= 0.66) {
        //console.log(paper);
        return paper;
    }
    else {
        //console.log(scissors);
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    let tie = "It's a tie! You selected " + playerSelection + " and the computer also chose " + computerSelection;
    let paperBeatsRock = "You win! " +(playerSelection[0].toUpperCase() + playerSelection.slice(1)) + " beats "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
    let rockBeatsScissors = "You win! " +(playerSelection[0].toUpperCase() + playerSelection.slice(1))+ " beats "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
    let scissorsBeatsPaper = "You win! " +(playerSelection[0].toUpperCase() + playerSelection.slice(1))+ " beats "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
    let paperBeatsRockLoss = "You lost! " +(computerSelection[0].toUpperCase() + computerSelection.slice(1))+ " beats "+(playerSelection[0].toUpperCase() + playerSelection.slice(1));
    let rockBeatsScissorsLoss = "You lost! " +(computerSelection[0].toUpperCase() + computerSelection.slice(1))+ " beats "+(playerSelection[0].toUpperCase() + playerSelection.slice(1));
    let scissorsBeatsPaperLoss = "You lost! " +(computerSelection[0].toUpperCase() + computerSelection.slice(1))+ " beats "+(playerSelection[0].toUpperCase() + playerSelection.slice(1));



    if (playerSelection === computerSelection) {
        return tie;
    }
    else if 
        ((playerSelection === "paper") && (computerSelection === "rock")) {
            return paperBeatsRock;
        }
    else if 
        ((playerSelection === "rock") && (computerSelection === "scissors")) {
            return rockBeatsScissors;
        }    
     else if 
        ((playerSelection === "scissors") && (computerSelection === "paper")) {
            return scissorsBeatsPaper;
        }   
    else if 
        ((playerSelection === "rock") && (computerSelection === "paper")) {
            return paperBeatsRockLoss;
        }
    else if 
        ((playerSelection === "scissors") && (computerSelection === "rock")) {
            return rockBeatsScissorsLoss;
        }
     else if 
        ((playerSelection === "paper") && (computerSelection === "scissors")) {
            return scissorsBeatsPaperLoss;
        }
}

// function capitalize(playerSelection) {
//     let allLowerCase = playerSelection.toLowerCase();
//     let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
//     return firstLetterCap;
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(capitalize(playerSelection), computerSelection));



function game(playRound) {

    for (let i = 0; i < 5; i++) {
        let answer = prompt("Input your weapon ");
        console.log("You have chosen "+answer+" and the computer chose "+computerSelection);
    }

}


const playerSelection = game();
// const computerSelection = getComputerChoice();