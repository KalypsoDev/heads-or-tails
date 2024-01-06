import { state } from './state.js';

const scoreBoard = document.getElementById('scoreboard-container');

export function updateScoreboard(outcome) {
    state[outcome]++;
    const outcomeMessage = document.getElementById('outcome');
    outcomeMessage.innerHTML = `You've got ${outcome}!`;
    scoreBoard.classList.remove('hidden');
    const headsUpdate = document.getElementById('heads-count');
    headsUpdate.innerHTML = state.heads;
    const tailsUpdate = document.getElementById('tails-count');
    tailsUpdate.innerHTML = state.tails;
}

export function resetScoreboard() {
    state.heads = 0;
    state.tails = 0;
    scoreBoard.classList.add('hidden');
}
