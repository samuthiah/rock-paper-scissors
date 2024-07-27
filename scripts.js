document.addEventListener("DOMContentLoaded", () => {

    function getComputerChoice() {
        // Pick a random integer between zero and two, inclusive 
        return (Math.floor(Math.random() * 3));
    }
    // Declare humanScore and computerScore variables with inital values of 0
    let humanScore = 0;
    let computerScore = 0;


    // Declare function playRound
    function playRound(humanChoice, computerChoice = getComputerChoice()) {
        let resultsDiv = document.querySelector("#results");

        // Cases where human chooses rock
        if (humanChoice === 0) {
            if (computerChoice === 0) {
                resultsDiv.textContent = "Tie! Pick again";
                return "tie";
            }
            if (computerChoice === 1) {
                resultsDiv.textContent = "Paper beats rock. You lose!";
                return "computer";
            }
            if (computerChoice === 2) {
                resultsDiv.textContent = "Rock beats scissors. You win!";
                return "human";
            }
        }
        // Case where human choose paper
        if (humanChoice === 1) {
            if (computerChoice === 0) {
                resultsDiv.textContent = "Paper beats rock. You win!";
                return "human";
            }
            if (computerChoice === 1) {
                resultsDiv.textContent = "Tie! Pick again!";
                return "tie";
            }
            if (computerChoice === 2) {
                resultsDiv.textContent = "Scissors beats paper. You lose!";
                return "computer";
            }
        }

        // Case where human choose scissors
        if (humanChoice === 2) {
            if (computerChoice === 0) {
                resultsDiv.textContent = "Rock beats scissors. You lose!";
                return "computer";
            }
            if (computerChoice === 1) {
                resultsDiv.textContent = "Scissors beats paper. You win!";
                return "human";
            }
            if (computerChoice === 2) {
                resultsDiv.textContent = "Tie! Pick again";
                return "tie";
            }
        }
    }




    

function showScore(winner) {
    const resultsDiv = document.querySelector("#results");
    const winnerDiv = document.querySelector("#winner");
    const humanCurScore = document.querySelector("#humanScore");
    const computerCurScore = document.querySelector("#computerScore");
    if (winner === "human") {
        humanScore++;
        humanCurScore.textContent = `Your Score: ${humanScore}`;

        if (humanScore >= 5) {
            winnerDiv.textContent = "You win!"
        }
    }
    else if (winner === "computer") {
        computerScore++;
        computerCurScore.textContent = `Opponent's Score: ${computerScore}`;
        if (computerScore >= 5) {
            winnerDiv.textContent = "You lose"
        }
            
    }
}

    // Adds an Event listener to play a game for each option
    const rockButton = document.querySelector("#rockButton");
    rockButton.addEventListener("click", (e) => {
        // play a round of RPI
        roundResult = playRound(0);
        if (roundResult === "human") {
            showScore("human");
        }
        if (roundResult === "computer") {
            showScore("computer");
        }
    })
    const paperButton = document.querySelector("#paperButton");
    paperButton.addEventListener("click", (e) => {
        roundResult = playRound(1);
        if (roundResult === "human") {
            showScore("human");
        }
        if (roundResult === "computer") {
            showScore("computer");
        }
    })
    const scissorsButton = document.querySelector("#scissorsButton");
    scissorsButton.addEventListener("click", (e) => {
        roundResult = playRound(2);
        if (roundResult === "human") {
            showScore("human");
        }
        if (roundResult === "computer") {
            showScore("computer");
        }
    })
})





