const gameBoard = document.querySelector('#gameBoard');

let turn = 'X';

let xArray = [];
let oArray = [];

function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
}

function createInfoDisplay(){
    const infoPanel = document.querySelector('#information');
    const infoPanelPlayers = document.createElement('div');
    const infoPanelGame = document.createElement('div');
    infoPanelPlayers.classList.add('playerInfo');
    infoPanelGame.classList.add('gameInfo');
    infoPanel.appendChild(infoPanelPlayers);
    infoPanel.appendChild(infoPanelGame);

    buildPlayerInfo(infoPanelPlayers);
    buildGameInfo(infoPanelGame);
}

createInfoDisplay();

function buildPlayerInfo(infoPanelPlayers){
    const player1NameLabel = document.createElement('p');
    const player1NameInput = document.createElement('input');
    const player2NameLabel = document.createElement('p');
    const player2NameInput = document.createElement('input');
    player1NameLabel.textContent = "Enter Player 1 Name";
    player1NameInput.setAttribute('type', 'text');
    player1NameInput.setAttribute('id', 'player1Name');
    player1NameInput.setAttribute('name', 'textFieldName');
    player2NameLabel.textContent = "Enter Player 2 Name";
    player2NameInput.setAttribute('type', 'text');
    player2NameInput.setAttribute('id', 'player2Name');
    player2NameInput.setAttribute('name', 'textFieldName');
    infoPanelPlayers.append(player1NameLabel);
    player1NameLabel.append(player1NameInput);
    infoPanelPlayers.append(player2NameLabel);
    player2NameLabel.append(player2NameInput);

    const markerDescription = document.createElement('p');
    markerDescription.textContent = "Player 1, please select a marker."
    + " Player 2 will automatically be assigned the other marker.";
    infoPanelPlayers.append(markerDescription);

    const markerXLabel = document.createElement('Label');
    const markerOLabel = document.createElement('Label');
    const markerSelectX = document.createElement('input');
    const markerSelectO = document.createElement('input');
    markerXLabel.textContent = "X";
    markerSelectX.setAttribute('type', 'radio');
    markerSelectX.setAttribute('id', 'X');
    markerSelectX.setAttribute('name', 'markerType');
    markerOLabel.textContent = "O";
    markerSelectO.setAttribute('type', 'radio');
    markerSelectO.setAttribute('id', 'O');
    markerSelectO.setAttribute('name', 'markerType');
    infoPanelPlayers.append(markerXLabel);
    markerXLabel.append(markerSelectX);
    infoPanelPlayers.append(markerOLabel);
    markerOLabel.append(markerSelectO);
}

function buildGameInfo(infoPanelGame) {
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

function assignPlayerInfo(){
    const player1Name = document.querySelector('player1Name');
    const player2Name = document.querySelector('player2Name');
    const markerSelectX = document.querySelector('markerTypeX');
    const markerSelectO = document.querySelector('markerTypeO');
}

function getRadioValue(){
    const markers = document.getElementsByName('markerType');
    for (i = 0; i<markers.length; i++){
        if (markers[i].checked){
            return markers[i].id;
        }
    }
}

function getPlayerName(playerNumber){
    const textFieldName = document.getElementsByName('textFieldName');
    if (playerNumber === 'player1'){
        return textFieldName[0].value;
    }
    else if (playerNumber === 'player2'){
        return textFieldName[1].value;
    }

}

//create user1 and user 2 based on below
//announce winner
//update scoreboard
//disable start button after clicking 
//enable start button after finishing game
//need to overwrite within field and not create one below

const startGameBtn = document.querySelector('button');
startGameBtn.disabled = true;
startGameBtn.disabled = false;
startGameBtn.addEventListener('click', () => {
    getRadioValue();
    getPlayerName("player1");
    getPlayerName("player2");
    createBoard()
})

//user1 = new createUser(user1Name.value, selectedMarker);



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
        [0, 4, 8], [2, 4, 6]];
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
