function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase()
                    + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return 'You Tie!';
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (Math.max(playerScore, computerScore) < 3) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.charAt(4) === 'W') {
            playerScore++;
        }
        else if (result.charAt(4) == 'L') {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return 'Human wins!';
    }
    else {
        return 'Computer wins!';
    }
}

console.log(game());
