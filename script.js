const choiceBtns = document.getElementById("btn-wrapper");
const winner = document.querySelector("#winner");
const compChoice = document.querySelector("#computer-selection");
const playerChoice = document.querySelector("#player-selection");
const results = document.querySelector("#results");
const round = document.querySelector("#round");

let roundTally = 1;
let playerTally = 0;
let compTally = 0;
let drawTally = 0;

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
         return "Scissors";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let choices = (playerSelection + computerSelection).toLowerCase();
    let roundResult;
    
    playerChoice.textContent = `You chose: ${(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))}.`;
    results.appendChild(playerChoice);
    compChoice.textContent = `The computer chose: ${computerSelection}.`;
    results.appendChild(compChoice);

    switch(choices) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            roundResult = "draw";
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            roundResult = "lose"
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            roundResult = "win"
            break;
    }
    return roundResult;
}

function gameWinTest(playerTally, compTally) {
    if (playerTally > compTally) {
        return "you";
    } else if (playerTally < compTally) {
        return "the computer";
    } else {
        return "nobody, it was a draw"
    }
}

function roundWinTest(playerInput) {
    let playRoundResult = playRound(playerInput);
    if (playRoundResult === "win") {
        playerTally++;
        return `You won round ${roundTally}`;
    } else if (playRoundResult === "lose") {
        compTally++;
        return `You lost round ${roundTally}.`;
    } else if (playRoundResult === "draw") {
        drawTally++;
        return `Round ${roundTally} was a draw.`;
    }
}

choiceBtns.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    
    if (roundTally === 5) {
        round.textContent = roundWinTest(event.target.id);
        
        let overallWin = `Game complete, in ${roundTally} rounds, you won ${playerTally}, drew ${drawTally}, and lost ${compTally}. The overall winner is ${gameWinTest(playerTally, compTally)}!`;
        
        playerTally = 0;
        compTally = 0;
        roundTally = 0;

        choiceBtns.remove();

        return winner.textContent = overallWin;
    }

    round.innerHTML = "";
    round.append(roundWinTest(event.target.id)); 
    roundTally++;   
});