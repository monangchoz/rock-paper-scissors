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

let humanChoice;

let computerChoice;

humanScore = 0;
computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ("Draw")
        return 
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" ||humanChoice === "scissors" && computerChoice === "paper" ) {
        console.log ("You win!")
        return 
    } else return "You lose!"
}

function playGame (humanChoice, computerChoice) {
    while (humanScore < 5 && computerScore < 5) {

        humanChoice = prompt("rock, paper, or scissors (lowercase)")
        console.log(("You choose :") + humanChoice)

        computerChoice = getComputerChoice()
        console.log("Computer choose :" + computerChoice)

        if (humanChoice === computerChoice) {
            console.log ("Draw") 
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" ||humanChoice === "scissors" && computerChoice === "paper" ) {
            console.log ("You win!")
            humanScore++
        } else {
            console.log("You lose")
            computerScore++
        }

        console.log ("Your Score :" +humanScore)
        console.log ("Computer Score:" + computerScore)
        console.log ("-------------------------")
}
}



console.log(playGame(humanChoice, computerChoice))