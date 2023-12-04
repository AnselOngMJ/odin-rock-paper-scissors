function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection;
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }
    switch (playerSelection + computerSelection) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        default:
            return 'Invalid input!';
    }
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));