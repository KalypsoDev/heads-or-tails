import { state } from './state.js';

const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    const coinSides = ["heads", "tails"];
    const randomSide = Math.floor(Math.random()*2);
    const outcome = coinSides[randomSide];
    updateScoreboard(outcome);
}

function updateScoreboard(outcome) {
    state[outcome]++;
    const scoreBoard = document.getElementById('scoreboard-container');
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
    console.log('The game has started again');
}
