
//assign/create variables

let scorePlayer = 0,
    scoreComputer = 0;

//create computerChoice function

function computerChoice () {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//allow player to choose rock, paper, or scissors

function playerChoice() {
    while (true) {
        let choice = prompt("Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        if ((choice != "rock") && (choice != "paper") && (choice != "scissors")) {
            console.log("Invalid choice.");
            continue;
        } else {
            return (choice);
        }
    }
}

//turn choices into numerical format of 0, 1, or 2

function changeVal(value) {
    if (value === "rock") {
        value = 0;
        return value;
    } else if (value === "scissors") {
        value = 1;
        return value;
    } else if (value === "paper") {
        value = 2;
        return value;
    }
}

//create playOneRound function

function playOneRound() {
    computerSelection = computerChoice();
    playerSelection = playerChoice();
    console.log("User plays " + playerSelection + ". Computer plays " + computerSelection + ".");
    let result = (changeVal(playerSelection) - changeVal(computerSelection));
    if (result === 0) {
        console.log("Tie.");
    } else if (result === 2 || result === -1){
        scorePlayer++;
        console.log("Player wins.");
    } else if (result === 1 || result === -2) {
        scoreComputer++;
        console.log("Computer wins.");
    }
}

//create playGame function

function playGame() {
    alert("Let's play 5 rounds of rock paper scissors!");
    scorePlayer = 0;
    scoreComputer = 0;
    for (x = 1; x <= 5; x++) {
        playOneRound();
        console.log("Player Score: " + scorePlayer);
        console.log("Computer Score: " + scoreComputer);
    } 
    if (scorePlayer > scoreComputer) {
        console.log("Player wins with a score of " + scorePlayer + "!")
    } else if (scoreComputer > scorePlayer) {
        console.log("Computer wins with a score of " + scoreComputer + "!")
    }
}

playGame()