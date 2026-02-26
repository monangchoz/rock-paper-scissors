function getComputerInput() {

    let computerInput = Math.floor(Math.random() * 3)
    if (computerInput === 0) {
        return "rock";
    } else if (computerInput === 1) {
        return "paper";
    } else if (computerInput === 2) {
        return "scissors";
    }
}

console.log(getComputerInput())