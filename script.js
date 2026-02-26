function getComputerChoice() {

    let computerInput = Math.floor(Math.random() * 3)
    if (computerInput === 0) {
        return "rock";
    } else if (computerInput === 1) {
        return "paper";
    } else if (computerInput === 2) {
        return "scissors";
    }
}

let humanChoice = prompt("rock, paper, or scissors")
console.log(humanChoice)

let computerChoice = getComputerChoice()
console.log(computerChoice)

humanScore = 0;
computerScore = 0;

