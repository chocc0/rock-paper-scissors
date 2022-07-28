//UI references

const buttons = document.querySelectorAll('#choices>button');
const choices = document.getElementById('choices');
const roundResults = document.querySelector('.roundResults');
const scores = document.querySelector('.scores');
const finalWinner = document.querySelector('.finalWinner');
const reset = document.getElementById('reset')
const playAgainBtn = document.querySelector('.playAgain')

//when the game first begins to load

let scorePlayer = 0,
    scoreComputer = 0;
finalWinner.style.visibility = 'hidden'
reset.style.visibility = 'hidden'

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

function playOneRound(playerSelection) {
    computerSelection = computerChoice();
    let result = '';
    result = ("Computer plays " + computerSelection + ".");
    let value = (changeVal(playerSelection) - changeVal(computerSelection));
    if (value === 0) {
        result += ("\nTie.");
    } else if (value === 2 || value === -1){
        scorePlayer++;
        result += ("\nPlayer wins this round!");
    } else if (value === 1 || value === -2) {
        scoreComputer++;
        result += ("\nComputer wins this round!");
    }

    roundResults.textContent = result
}

function displayScore() {
    let bothScores = ''
    bothScores = ("Player Score: " + scorePlayer + " Computer Score: " + scoreComputer);

    scores.textContent = bothScores;
}

function keepScore() {
    let finalResult = ''
    if (scorePlayer === 5) {
        finalResult = ("Player wins the game!")
    } else if (scoreComputer === 5) {
        finalResult = ("Computer wins the game!")
    }

    finalWinner.textContent = finalResult;
    finalWinner.style.visibility = 'visible';
}

function resetGame(){
    buttons.forEach ((button) => {
        button.setAttribute('disabled', '')
    })
    reset.style.visibility = 'visible'
    playAgainBtn.addEventListener('click', () => {
        window.location.reload()
    })
}

for (let button of buttons) {
    button.addEventListener('click', function() {
        playOneRound(button.className);
        displayScore();
        if (scorePlayer === 5 || scoreComputer === 5) {
            keepScore()
            resetGame()
        }
    }, false)
}

