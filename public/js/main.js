import { flipCoin, resetCoin } from './coin.js';
import { resetScoreboard } from './scoreBoard.js';

const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCoin);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetCoin);
resetButton.addEventListener('click', resetScoreboard);
