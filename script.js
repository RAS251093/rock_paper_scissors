function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
         return "Scissors";
    }
}

function playRound (playerSelection, computerPlay) {
    let computerSelection = computerPlay();
    let roundWinTest = (playerSelection + computerSelection).toLowerCase();
    
    playerChoice.textContent = `You chose: ${(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))}.`;
    results.appendChild(playerChoice);
    compChoice.textContent = `The computer chose: ${computerSelection}.`;
    results.appendChild(compChoice);

    switch(roundWinTest) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return "draw";
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            return "lose"
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return "win"
            break;
    }
}

/* function game(playerInput) {
    const numberOfRounds = 5;
    let total = 0;
    console.log(playerInput);

    for (let i = 0; i < numberOfRounds; i++) {
            if (playerInput === null || playerInput === "") {
            total = null;
            break;
        } else if (playRound(playerInput, computerPlay()) === "win") {
            total += 1;
            console.log("You win a round.")
        } else if (playRound(playerInput, computerPlay()) === "lose") {
            total -= 1;
            console.log("You lose a round.")
        } else {
            total += 0;
            console.log("You draw a round.")
        }
    }
    return gameWinTest(total, numberOfRounds);
} */

/* function gameWinTest(roundTotal, numberOfRounds) {
    if (roundTotal === null) {
        return "Nobody wins when you cancel."
    } else if (roundTotal > 0) {
        return `You got the most wins over ${numberOfRounds} rounds, you win!!`;
    } else if (roundTotal < 0) {
        return `You got the most losses over ${numberOfRounds} rounds, you lose...`;
    } else {
        return `Over the ${numberOfRounds} rounds played, it was a draw!`;
    }
} */

const btnWrapper = document.getElementById("btn-wrapper");
btnWrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    playRound(event.target.id, computerPlay);
    
});

const playerWin = document.querySelector("#player-wins");
const compWin = document.querySelector("#computer-wins");
const compChoice = document.querySelector("#computer-selection");
const playerChoice = document.querySelector("#player-selection");
const results = document.querySelector("#results");
const round = document.querySelector("#round");

