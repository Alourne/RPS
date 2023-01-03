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

function playRound(playerSelection, ComputerSelection) {
    let win = "You win! You selected" + playerSelection + " and the computer chose " + ComputerSelection;
    let tie = "It's a tie! You selected" + playerSelection + " and the computer chose " + ComputerSelection;
    let lose = "You lost! You selected" + playerSelection + " and the computer chose " + ComputerSelection;
}