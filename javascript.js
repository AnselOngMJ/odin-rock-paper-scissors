function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() +
                      playerSelection.slice(1).toLowerCase();
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

    const body = document.querySelector('body');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    const results = document.createElement('div');
    const scores = document.createElement('div');
    const log = document.createElement('div');

    rock.textContent = 'Rock';
    rock.value = 'Rock';
    paper.textContent = 'Paper';
    paper.value = 'Paper';
    scissors.textContent = 'Scissors';
    scissors.value = 'Scissors';
    results.append(scores, log);
    body.append(rock, paper, scissors, results);

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const line = document.createElement('p');
            const result = playRound(button.value, getComputerChoice());
            if (result.charAt(4) === 'W') {
                playerScore++;
            }
            else if (result.charAt(4) == 'L') {
                computerScore++;
            }
            scores.textContent = `Player Score: ${playerScore},
                                  Computer Score: ${computerScore}`;
            line.textContent = result;
            log.append(line);
            checkScore();
        });
    });

    function checkScore() {
        if (Math.max(playerScore, computerScore) === 5) {
            if (playerScore > computerScore) {
                log.append('Human wins!');
            }
            else {
                log.append('Computer wins!');
            }
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
}

game();
