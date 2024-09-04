
const gameBoard = document.querySelector('#gameBoard');

let turn = 'X';

let xArray = [];
let oArray = [];

function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
}


// and get data from users
function createInfoDisplay(){
    const infoPanel = document.querySelector('#information');
    const infoPanelPlayers = document.createElement('div');
    const infoPanelGame = document.createElement('div');
    infoPanelPlayers.classList.add('playerInfo');
    infoPanelGame.classList.add('gameInfo');
    infoPanel.appendChild(infoPanelPlayers);
    infoPanel.appendChild(infoPanelGame);

    getPlayerInfo(infoPanelPlayers);
    getGameInfo(infoPanelGame);
}

createInfoDisplay();

function getPlayerInfo(infoPanelPlayers){
    const player1NameLabel = document.createElement('p');
    const player1NameInput = document.createElement('input');
    const player2NameLabel = document.createElement('p');
    const player2NameInput = document.createElement('input');
    player1NameLabel.textContent = "Enter Player 1 Name";
    player1NameInput.setAttribute('type', 'text');
    player1NameInput.setAttribute('id', 'player1Name');
    player2NameLabel.textContent = "Enter Player 2 Name";
    player2NameInput.setAttribute('type', 'text');
    player2NameInput.setAttribute('id', 'player2Name');
    infoPanelPlayers.append(player1NameLabel);
    infoPanelPlayers.append(player1NameInput);
    infoPanelPlayers.append(player2NameLabel);
    infoPanelPlayers.append(player2NameInput);

    const markerDescription = document.createElement('p');
    markerDescription.textContent = "Player 1, please select a marker."
    + " Player 2 will automatically be assigned the other marker.";
    infoPanelPlayers.append(markerDescription);

    const markerNameX = document.createElement('Label');
    const markerNameO = document.createElement('Label');
    const markerSelectX = document.createElement('input');
    const markerSelectO = document.createElement('input');
    markerNameX.textContent = "X";
    markerSelectX.setAttribute('type', 'radio');
    markerSelectX.setAttribute('id', 'markerTypeX');
    markerNameO.textContent = "O";
    markerSelectO.setAttribute('type', 'radio');
    markerSelectO.setAttribute('id', 'markerTypeO');
    infoPanelPlayers.append(markerSelectX);
    infoPanelPlayers.append(markerNameX);
    infoPanelPlayers.append(markerSelectO);
    infoPanelPlayers.append(markerNameO);

}

function getGameInfo(infoPanelGame) {
    const scoreDisplay = document.createElement('p');
    const currentTurn = document.createElement('p');
    const startGameBtn = document.createElement('button');
    scoreDisplay.classList.add('score');
    currentTurn.classList.add('turn');
    startGameBtn.textContent = "Start Game";
    currentTurn.textContent = "X goes first";
    scoreDisplay.textContent = " ";
    infoPanelGame.append(scoreDisplay);
    infoPanelGame.append(currentTurn);
    infoPanelGame.append(startGameBtn);
}


function createBoard(){
    let initialCells = Array(9).fill('');

    initialCells.forEach((cell, index) => {
        const cellContent = document.createElement('div');
        cellContent.classList.add('cell');
        cellContent.id = index;

        cellContent.addEventListener('click', addTurn)

        gameBoard.append(cellContent);
    })
}

createBoard()

function addTurn(e){
    currentTurn = document.querySelector('.turn')
    e.target.innerText = turn;
    if (turn === 'X'){
        xArray.push(Number(e.target.id));
    }
    else {
        oArray.push(Number(e.target.id));
    }
    // If turn equals X, change to O otherwise, keep X
    turn = turn === 'X' ? 'O' : 'X';
    currentTurn.textContent = "It is now " + turn + "'s turn";
    e.target.removeEventListener('click', addTurn);
    checkScore()
}

function checkScore() {
    const scoreDisplay = document.querySelector('.score');
    const allCells = document.querySelectorAll('.cell');
    const winCombinations = [
        [0, 1, 2], [3, 4, 5],[6, 7, 8],
        [0, 3, 6], [1, 4, 7],[2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    for (let i = 0; i<winCombinations.length; i++){
        winCombination = winCombinations[i];
        if(winCombination.every(cellLocation => 
            xArray.includes(cellLocation))){
            scoreDisplay.textContent = "X wins.";
            allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
        }
        else if(winCombination.every(cellLocation => 
            oArray.includes(cellLocation))){
            scoreDisplay.textContent = "O wins.";
            allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
        }
    }         
}
