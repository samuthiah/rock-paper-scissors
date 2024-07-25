// Declare getComputerChoice
function getComputerChoice() {
    // Pick a random integer between zero and two, inclusive 
    return (Math.floor(Math.random() * 3));
}



// Declare function getHumanChoice
function getHumanChoice() {
    // Ask user for input, rock paper or scissors
    choice = prompt("Rock, paper, or scissors?");

    //Assign input to an integer between 0 and 2 and return that integer
    if (choice.toUpperCase() === 'ROCK') {
        return 0;
    }
    else if (choice.toUpperCase() === "PAPER") {
        return 1;
    } 
    else if (choice.toUpperCase() ==="SCISSORS") {
        return 2
    }
    else {
        return getHumanChoice();
    }
}

// Declare humanScore and computerScore variables with inital values of 0
let humanScore = 0;
let computerScore = 0;


// Declare function playRound
function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
    // Compare parameters, if a tie, repeat until there is not a tie
    if (computerChoice === humanChoice) {
        console.log("Tie! Pick again");
        return playRound();
    }
    // If one choice minus another choice is 1 modulo 3, it's a winner, and vice versa if it's 2 mod 3
    // Case where computer wins, returns 0;
    else if ((computerChoice - humanChoice) % 3 === 1) {
        if (computerChoice === 0) {
            console.log("You lose! Rock beats scissors");
        }
        else if (computerChoice === 1) {
            console.log("You lose! Paper beats rock");
        }
        else if (computerChoice === 2) {
            console.log("You lose! Scissors beats paper")
        }
        return 0;
    }
    // Case where human wins, returns 1
    else if ((computerChoice - humanChoice) % 3 === 2) {
        if (computerChoice === 0) {
            console.log("You win! Paper beats rock");
        }
        else if (computerChoice === 1) {
            console.log("You win! Scissors beats paper");
        }
        else if (computerChoice === 2) {
            console.log("You win! Rock beats scissors")
        }
        return 1;
    }
}

// Declare playGame
function playGame() {
    // While roundsPlayed is less than 5, play another round
    for (let i = 0; i < 5; i++) {
        // Play round and increment score of winner
        if (playRound()) {
            humanScore++;
        }
        else {
            computerScore++;
        }
    }


    if (humanScore > computerScore) {
        alert("You win!");
    }
    else {
        alert("You lose!");
    }
}
playGame();




