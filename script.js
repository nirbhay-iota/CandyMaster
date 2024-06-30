document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.parentNode.removeChild(loadingScreen);
        document.getElementById('menu-container').classList.remove('hidden');
    }, 2000);
});

const symbols = ['🍬', '🌟', '❤️'];
const numCols = 3;
const numRows = 6;
let gameBoard = [];

function showGame() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    generateGameBoard();
}

function showAbout() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('about-container').classList.remove('hidden');
}

function showHowToPlay() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('how-to-play-container').classList.remove('hidden');
}

function backToMenu() {
    document.getElementById('menu-container').classList.remove('hidden');
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('about-container').classList.add('hidden');
    document.getElementById('how-to-play-container').classList.add('hidden');
}

function exitGame() {
    alert("Exit clicked!");
}

function generateGameBoard() {
    const gameBoardDiv = document.querySelector('.game-board');
    gameBoardDiv.innerHTML = '';
    gameBoard = [];
    
    for (let i = 0; i < numCols; i++) {
        const col = [];
        for (let j = 0; j < numRows; j++) {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            col.push(symbol);
            
            const cell = document.createElement('div');
            cell.textContent = symbol;
            gameBoardDiv.appendChild(cell);
        }
        gameBoard.push(col);
    }
}

function startGame() {
    rollSymbols();
    setTimeout(checkWin, 1500);
}

function rollSymbols() {
    const gameBoardDiv = document.querySelector('.game-board');
    const cells = gameBoardDiv.querySelectorAll('div');
    
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.classList.add('rolling');
        setTimeout(() => {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            cell.textContent = symbol;
            cell.classList.remove('rolling');
            
            const col = Math.floor(i / numRows);
            const row = i % numRows;
            gameBoard[col][row] = symbol;
        }, Math.random() * 1000);
    }
}

function checkWin() {
    let win = false;
    
    for (let row = 0; row < numRows; row++) {
        if (gameBoard[0][row] === gameBoard[1][row] && gameBoard[1][row] === gameBoard[2][row]) {
            win = true;
            break;
        }
    }
    
    if (win) {
        alert('You win!');
    } else {
        alert('You lose!');
    }
}
