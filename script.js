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

    let winTest = (playerSelection + computerSelection).toLowerCase();

    switch(winTest) {
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
    let total = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerPlay()) === "win") {
            total += 1;
        } else if (playRound(playerSelection, computerPlay()) === "lose") {
            total -= 1;
        } else {
            total += 0;
        }
    }
    console.log(total);
    if (total > 0) {
        return "You got the most wins over 5 rounds, you win!!";
    } else if (total < 0) {
        return "You got the most losses over 5 rounds, you lose...";
    } else {
        return "Over the 5 rounds played, it was a draw!";
    }
}


const playerSelection = "rock";

    
console.log(game());

