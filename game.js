//create references

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results')

//assign/create score variables

let scorePlayer = 0,
    scoreComputer = 0;

//create computerChoice function

function computerChoice () {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 0) {
        return "Rock";
    } else if (randomChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//turn choices into numerical format of 0, 1, or 2

function changeVal(value) {
    if (value === "Rock") {
        value = 0;
        return value;
    } else if (value === "Scissors") {
        value = 1;
        return value;
    } else if (value === "Paper") {
        value = 2;
        return value;
    }
}

//create playOneRound function

function playOneRound(playerSelection) {
    computerSelection = computerChoice();
    console.log("User plays " + playerSelection + ". Computer plays " + computerSelection + ".");
    let value = (changeVal(playerSelection) - changeVal(computerSelection));
    let result = '';
    if (value === 0) {
        result = ("Tie.");
    } else if (value === 2 || value === -1){
        scorePlayer++;
        result = ("Player wins!");
    } else if (value === 1 || value === -2) {
        scoreComputer++;
        result = ("Computer wins!");
    }

    let displayedResults = document.createElement('div');

    displayedResults.textContent = result;
    results.appendChild(displayedResults);
}


for (let button of buttons) {
    button.addEventListener('click', function(e) {
        playOneRound(button.className);
    })
}

//create playGame function
/*
function playGame() {
    alert("Let's play 5 rounds of rock paper scissors!");
    scorePlayer = 0;
    scoreComputer = 0;
    for (x = 1; x <= 5; x++) {
        console.log(playOneRound());
        console.log("Player Score: " + scorePlayer);
        console.log("Computer Score: " + scoreComputer);
    } 
    if (scorePlayer > scoreComputer) {
        console.log("Player wins with a score of " + scorePlayer + "!");
    } else if (scoreComputer > scorePlayer) {
        console.log("Computer wins with a score of " + scoreComputer + "!");
    } else if (scoreComputer === scorePlayer) {
        console.log("Both the Player and the Computer tie with a score of " + scorePlayer + "!");
    }
}*/
