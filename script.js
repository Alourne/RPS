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
    let tie = "It's a tie! You selected" + playerSelection + " and the computer also chose " + computerSelection;
    let paperBeatsRock = "You win! " +playerSelection+ " beats "+computerSelection;
    let rockBeatsScissors = "You win! " +playerSelection+ " beats "+computerSelection;
    let scissorsBeatsPaper = "You win! " +playerSelection+ " beats "+computerSelection;
    let paperBeatsRockLoss = "You lost!! " +computerSelection+ " beats "+playerSelection;
    let rockBeatsScissorsLoss = "You lost! " +computerSelection+ " beats "+playerSelection;
    let scissorsBeatsPaperLoss = "You lost! " +computerSelection+ " beats "+playerSelection;

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

const playerSelection = "paper";
const computerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));