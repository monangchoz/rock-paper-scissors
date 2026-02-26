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

let humanChoice = prompt("rock, paper, or scissors (lowercase)")
console.log(("You choose :") + humanChoice)

let computerChoice = getComputerChoice()
console.log("Computer choose :" + computerChoice)

humanScore = 0;
computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw"
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" ||humanChoice === "scissors" && computerChoice === "paper" ) {
        return "You win!"
    } else return "You lose!"
}

console.log(playRound(humanChoice, computerChoice))