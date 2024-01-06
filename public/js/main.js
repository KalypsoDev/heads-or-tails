
const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    const coinSides = ["heads", "tails"];
    const randomSide = Math.floor(Math.random()*2);
    const outcome = coinSides[randomSide];
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    console.log('The game has started again');
}


