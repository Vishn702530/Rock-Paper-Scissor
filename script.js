
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else {
        return "lose";
    }
}

function playGame() {
    let w=0;
    let l=0;
    for (i = 0; i < 5; i++) {
        const prompt = require('prompt-sync')();
        const playerSelection = prompt("Enter You Choice: ").toLowerCase(); 
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == "tie") {
            console.log("The round ended in tie");
        } else if (result == "win") {
            console.log("you won the round!!");
            w=w+1;
        } else if (result == "lose") {
            console.log("you lose the round!!");
            l=l+1;
        }
    }
    if(w>l){
        console.log("winner")
    }else{
        console.log("loser")
    }
}
playGame();
