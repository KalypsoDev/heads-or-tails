import { updateScoreboard } from './scoreBoard.js';

const coinContainer = document.getElementById('coin-container');

export function flipCoin() {
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

export function resetCoin() {
    coinContainer.classList.remove('flip-to-heads', 'flip-to-tails');
}
