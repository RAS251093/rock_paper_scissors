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

function playRound (playerSelection, computerSelection) {
    let roundWinTest = (playerSelection + computerSelection).toLowerCase();

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

function game() {
    const numberOfRounds = 5;
    let total = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        let playerInput = prompt("Choose your weapon!!!", "Rock, paper or scissors???");

        playerSelectionTest(playerInput);

        if (playRound(playerInput, computerPlay()) === "win") {
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
}

function gameWinTest(roundTotal, numberOfRounds) {
    if (roundTotal > 0) {
        return `You got the most wins over ${numberOfRounds} rounds, you win!!`;
    } else if (roundTotal < 0) {
        return `You got the most losses over ${numberOfRounds} rounds, you lose...`;
    } else {
        return `Over the ${numberOfRounds} rounds played, it was a draw!`;
    }
}


function playerSelectionTest(playerInput) {
    if (playerInput === null || playerInput === undefined) {
        return console.log("Game canceled");
    } else if (!(playerInput === "rock" || playerInput === "paper" || playerInput === "scissors")) {
        return playerInput = prompt("You didn't enter a valid choice", "Try again");
    } else {
        return playerInput;
    }
}


console.log(game());