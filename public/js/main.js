import { state } from './state.js';

const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    const coinContainer = document.getElementById('coin-container');
    coinContainer.classList.remove('flip-to-heads', 'flip-to-tails');
    setTimeout(() => {
        const coinSides = ["heads", "tails"];
        const randomSide = Math.floor(Math.random()*2);
        const outcome = coinSides[randomSide];
        setTimeout(() => {
            updateScoreboard(outcome)
        }, 2000);
        coinContainer.classList.add(`flip-to-${outcome}`);
    }, 100)
}

const scoreBoard = document.getElementById('scoreboard-container');

function updateScoreboard(outcome) {
    state[outcome]++;
    const outcomeMessage = document.getElementById('outcome');
    outcomeMessage.innerHTML = `You've got ${outcome}!`;
    scoreBoard.classList.remove('hidden');
    const headsUpdate = document.getElementById('heads_count');
    headsUpdate.innerHTML = state.heads;
    const tailsUpdate = document.getElementById('tails_count');
    tailsUpdate.innerHTML = state.tails;
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    state.heads = 0;
    state.tails = 0;
    scoreBoard.classList.add('hidden');
}
