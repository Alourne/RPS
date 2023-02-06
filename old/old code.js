
function getComputerChoice(){ 
   const choices = [ // array with all the choices and a percentage of it selecting the choice
       {weapon: "Rock", pct: 33},
       {weapon: "Scissors", pct: 33},
       {weapon: "Paper", pct: 33}
   ];
   
   const expanded = choices.flatMap(choices => Array(choices.pct).fill(choices));
   const winner = expanded[Math.floor(Math.random() * expanded.length)];
   return winner.weapon;
   // console.log("winner: " + winner.weapon); 
   }
   
   function game() {
      let playerWin = 0;
      let computerWin = 0;
      let gameWinner = " ";
   
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
           playerSelection = button.className;
           const computerSelection = getComputerChoice();
           battleWinText.textContent = (playRound(playerSelection, computerSelection));
           playerWinText.textContent = "Player Win Total: " +playerWin;
           computerWinText.textContent = "Computer Win Total: " +computerWin;
           endGame();
        })
     })
   
   function playRound (playerSelection, computerSelection) {
    let tie = "It's a tie! You have selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let rockBeatsScissors = "Win! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let scissorsBeatsPaper = "Win! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let paperBeatsRock = "Win! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let rockBeatsScissorsLoss = "Loss! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let scissorsBeatsPaperLoss = "Loss! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
    let paperBeatsRockLoss = "Loss! You selected "+(playerSelection)+" and the computer chose "+(computerSelection);
   
    //returns back the result + updates the win/loss count
    if (playerSelection === computerSelection) {
       return tie;
    }
   
    else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
       playerWin++;
       return rockBeatsScissors;
    }
    
    else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
      playerWin++;
       return scissorsBeatsPaper;
    }
   
    else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
      playerWin++;
       return paperBeatsRock;
    }
   
    else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
       computerWin++;
       return rockBeatsScissorsLoss;
    }
    
    else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
      computerWin++
       return scissorsBeatsPaperLoss;
    }
   
    else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
      computerWin++;
       return paperBeatsRockLoss;
    }
   }
   
    //  create div DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);
   
    //  create player win tracking DOM 
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.textContent = "Player Win Total: " + playerWin;
    resultsDiv.appendChild(playerWinText);
   
    //  create computer win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "green";
    computerWinText.textContent = "Computer Win Total: " + computerWin;
    resultsDiv.appendChild(computerWinText);
   
    //  create battle win text DOM
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);
    
    //  create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "red";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);
   
    //  determine who won to five points first
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "YOU WIN!";
            gameWinText.textContent = gameWinner;
            
            //  disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            //  create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);
            
            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        } else if (computerWin == 5) {
            gameWinner = "COMPUTER WINS!";
            gameWinText.textContent = gameWinner;
            
            //  disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            //  create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);
            
            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
      }
    }
   }
   
   game();