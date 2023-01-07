function getComputerChoice(){ 
const choices = [
    {weapon: "rock", pct: 33},
    {weapon: "scissors", pct: 33},
    {weapon: "paper", pct: 33}
];

const expanded = choices.flatMap(choices => Array(choices.pct).fill(choices));
const winner = expanded[Math.floor(Math.random() * expanded.length)];
return winner.weapon;
// console.log("winner: " + winner.weapon); 
}

function game() {
    const wins = 0;
    const losses = 0;
    const gameWinner = "";

    for (let i=0; i < 5; i++) {
        playerSelection = prompt("pick your weapon");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("wins total: "+wins);
        console.log("losses total: "+losses);
    }


function playRound (playerSelection, computerSelection) {
 let tie = "It's a tie! You have selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let rockBeatsScissors = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let scissorsBeatsPaper = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let paperBeatsRock = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let rockBeatsScissorsLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let scissorsBeatsPaperLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
 let paperBeatsRockLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));

 if (playerSelection === computerSelection) {
    return tie;
 }

 else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return wins++;
    return rockBeatsScissors;
 }
 
 else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    wins++;
    return scissorsBeatsPaper;
 }

 else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    wins++;
    return paperBeatsRock;
 }

 else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    return rockBeatsScissorsLoss;
 }
 
 else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    return scissorsBeatsPaperLoss;
 }

 else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    return paperBeatsRockLoss;
 }
}
}


game();