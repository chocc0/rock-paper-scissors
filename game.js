
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


function playOneRound(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    playerSelection = playerChoice();
    console.log("User plays " + playerSelection + ". Computer plays " + computerSelection + ".");
    let scorePlayer,
        scoreComputer;
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



/*console.log(computerSelection);
console.log(playerSelection);*/

//create playOneRound function

function playOneRound(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    playerSelection = playerChoice();
    console.log("User plays " + playerSelection + ". Computer plays " + computerSelection + ".");
    let scorePlayer,
        scoreComputer;
    
    }
}

playOneRound()


//create playGame function