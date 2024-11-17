const hmumad = document.getElementById('hmumad');
let isBlack = true;

setInterval(() => {
    if (isBlack) {
        hmumad.style.color = '#ff0000';
        hmumad.style.textShadow = '2px 2px #000';
    } else {
        hmumad.style.color = '#000';
        hmumad.style.textShadow = '2px 2px #ff0000';
    }
    isBlack = !isBlack;
}, 50);

document.getElementById('playDoom').addEventListener('click', (event) => {
    event.preventDefault();
    const gameContainer = document.querySelector('.game-container');
    gameContainer.style.display = 'flex';
});