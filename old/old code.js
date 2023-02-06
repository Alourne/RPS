function getComputerChoice(){ 
    const choices = [ // array with all the choices and a percentage of it selecting the choice
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
        let wins = 0;
        let losses = 0;
        let winner = " ";
    
        // starts a 5 round game
        for (let i=0; i < 5; i++) {
            playerSelection = prompt("Pick your weapon");
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            console.log("Wins: "+wins);
            console.log("Losses: "+losses);
        }
    
        // plays the round
    function playRound (playerSelection, computerSelection) {
     let tie = "It's a tie! You have selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let rockBeatsScissors = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let scissorsBeatsPaper = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let paperBeatsRock = "Win! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let rockBeatsScissorsLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let scissorsBeatsPaperLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
     let paperBeatsRockLoss = "Loss! You selected "+(playerSelection[0].toUpperCase() + playerSelection.slice(1))+" and the computer chose "+(computerSelection[0].toUpperCase() + computerSelection.slice(1));
    
     //returns back the result + updates the win/loss count
     if (playerSelection === computerSelection) {
        return tie;
     }
    
     else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        wins++;
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
        losses++;
        return rockBeatsScissorsLoss;
     }
     
     else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        losses++
        return scissorsBeatsPaperLoss;
     }
    
     else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        losses++;
        return paperBeatsRockLoss;
     }
    
     // returns back the winner
        else if (wins > losses) {
            winner = "You won!";
        }
        else if (wins < losses) {
            winner = "You lost!";
        }
        else (wins === losses)
            winner = "It's a tie!";
        }
        console.log("Winner is "+winner);
    }
    
    game();