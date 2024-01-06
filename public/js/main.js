
const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    console.log('The coin is flipping');
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    console.log('The game has started again');
}


