
//assign/create variables


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

//create playerChoice function
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

//turn choices into numerical format of 0,1, or 2

function changeVal(value) {
    if (value === "rock") {
        value = 0
        return value
    } else if (value === "paper") {
        value = 1
        return value
    } else if (value === "scissors") {
        value = 2
        return value
    }
}

/*console.log(computerSelection);
console.log(playerSelection);*/

//create playOneRound function

function playOneRound(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    playerSelection = playerChoice();
    console.log("User plays " + playerSelection + ". Computer plays " + computerSelection + ".");
    let scorePlayer,
        scoreComputer;
    switch(changeVal(playerSelection) - changeVal(computerSelection)) {
        case (0):
            console.log("Tie.");
            break;
        case(-1 || 2):
            scorePlayer++;
            console.log("Computer wins.");
            break;
        case(-2 || 1):
            scoreComputer++;
            console.log("Player wins.");
            break;
    }
}

playOneRound()


//create playGame function