const gameBoard = document.querySelector('#gameBoard');
let xArray = [];
let oArray = [];
let turn = 'X';


function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;

    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;

    return {name, marker, getScore, increaseScore}
}

function createInfoDisplay(){
    const infoPanel = document.querySelector('#information');
    const currentTurn = document.createElement('div');
    const infoPanelPlayers = document.createElement('div');
    const infoPanelGame = document.createElement('div');
    currentTurn.classList.add('turn');
    infoPanelPlayers.classList.add('playerInfo');
    infoPanelGame.classList.add('gameInfo');
    currentTurn.textContent = "X's turn is first";
    infoPanel.append(currentTurn);
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
    player1NameLabel.textContent = "Enter Player 1 Name\n";
    player1NameInput.setAttribute('type', 'text');
    player1NameInput.setAttribute('id', 'player1Name');
    player1NameInput.setAttribute('name', 'textFieldName');
    player1NameInput.setAttribute('maxlength', '10');
    player2NameLabel.textContent = "Enter Player 2 Name" + "\n";
    player2NameInput.setAttribute('type', 'text');
    player2NameInput.setAttribute('id', 'player2Name');
    player2NameInput.setAttribute('name', 'textFieldName');
    player2NameInput.setAttribute('maxlength', '10');
    infoPanelPlayers.append(player1NameLabel);
    infoPanelPlayers.append(player1NameInput);
    infoPanelPlayers.append(player2NameLabel);
    infoPanelPlayers.append(player2NameInput);

    const markerDescription = document.createElement('p');
    markerDescription.textContent = "Player 1, please select a marker."
    + " Player 2 will automatically be assigned the other marker.";
    infoPanelPlayers.append(markerDescription);

    const radioButtonContainer = document.createElement('div');
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
    infoPanelPlayers.append(radioButtonContainer);
    radioButtonContainer.append(markerXLabel);
    markerXLabel.append(markerSelectX);
    radioButtonContainer.append(markerOLabel);
    markerOLabel.append(markerSelectO);
}

function buildGameInfo(infoPanelGame) {
    const scoreDisplayContainer = document.createElement('div');
    const scoreDisplayTitle = document.createElement('div');
    const scoreDisplayNames = document.createElement('div');
    const scoreDisplayScores = document.createElement('div');
    const scoreDisplayName1p = document.createElement('p');
    const scoreDisplayName2p = document.createElement('p');
    const scoreDisplayScorePlayer1p = document.createElement('p');
    const scoreDisplayScorePlayer2p = document.createElement('p');
    const startGameExplanation = document.createElement('div');

    const winnerAnnouncement = document.createElement ('div');
    const acceptPlayerSettingsBtn = document.createElement('button');
    const startGameBtn = document.createElement('button');
    const gameBtnContainer = document.createElement('div');
    scoreDisplayContainer.classList.add('scoreContainer');
    scoreDisplayTitle.classList.add('displayTitle');
    scoreDisplayNames.classList.add('displayNames');
    scoreDisplayScores.classList.add('displayScores');
    scoreDisplayName1p.classList.add('displayName1');
    scoreDisplayName2p.classList.add('displayName2');
    gameBtnContainer.classList.add('gameBtns')
    scoreDisplayScorePlayer1p.classList.add('displayScorePlayer1');
    scoreDisplayScorePlayer2p.classList.add('displayScorePlayer2');
    startGameExplanation.classList.add('startGameExplanation');
    acceptPlayerSettingsBtn.classList.add('playerSettingsBtn')
    startGameBtn.classList.add('startGameBtn')
    winnerAnnouncement.classList.add('winnerAnnouncement');

    scoreDisplayTitle.textContent = "Player Scores";
    acceptPlayerSettingsBtn.textContent = "Accept Player Values"
    startGameBtn.textContent = "Start New Game";
    startGameExplanation.textContent = "You must fill out player names and select " +
        "a marker before starting a game.";

    infoPanelGame.append(scoreDisplayContainer);
    scoreDisplayContainer.append(scoreDisplayTitle);
    scoreDisplayContainer.append(scoreDisplayNames);
    scoreDisplayNames.append(scoreDisplayName1p);
    scoreDisplayNames.append(scoreDisplayName2p);
    scoreDisplayScores.append(scoreDisplayScorePlayer1p);
    scoreDisplayScores.append(scoreDisplayScorePlayer2p);
    scoreDisplayContainer.append(scoreDisplayScores);
    infoPanelGame.append(winnerAnnouncement);
    infoPanelGame.append(startGameExplanation);
    infoPanelGame.append(gameBtnContainer);
    gameBtnContainer.append(acceptPlayerSettingsBtn)
    gameBtnContainer.append(startGameBtn);
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

const startGameBtn = document.querySelector('.startGameBtn');
const acceptPlayerSettingsBtn = document.querySelector('.playerSettingsBtn');
const player1Input = document.getElementById('player1Name');
const player2Input = document.getElementById('player2Name');
const xInput = document.getElementById('X');
const oInput = document.getElementById('O');

acceptPlayerSettingsBtn.addEventListener('click', () =>{
    const player1Name = getPlayerName("player1");
    const player2Name = getPlayerName("player2");
    const markerValue = getRadioValue();

    if (markerValue === 'X'){
        markerValuePlayer1 = 'X';
        markerValuePlayer2 = 'O';
    }
    else if(markerValue === 'O'){
        markerValuePlayer1 = 'O';
        markerValuePlayer2 = 'X';
    }

    player1 = new createPlayer(player1Name, markerValuePlayer1);
    player2 = new createPlayer(player2Name, markerValuePlayer2);
    player1Input.disabled = true;
    player2Input.disabled = true;
    xInput.disabled = true;
    oInput.disabled = true;
    acceptPlayerSettingsBtn.disabled = true;
})

startGameBtn.addEventListener('click', () => {
    const scoreDisplayName1= document.querySelector('.displayName1');
    const scoreDisplayName2= document.querySelector('.displayName2');
    let displayPlayer1Score = document.querySelector('.displayScorePlayer1');
    let displayPlayer2Score = document.querySelector('.displayScorePlayer2');

    scoreDisplayName1.textContent = player1.name;
    scoreDisplayName2.textContent = player2.name;

    displayPlayer1Score.textContent = player1.getScore();
    displayPlayer2Score.innerHTML = player2.getScore();

    clearBoard();
    createBoard();
    startGameBtn.disabled=true;
})

function clearBoard(){
    let allCellsOnBoard = document.getElementsByClassName('cell');
    allCellsOnBoard = [].slice.call(allCellsOnBoard,0);
    for (let i=0; i<allCellsOnBoard.length; i++){
        allCellsOnBoard[i].remove();
    } 
    xArray = [];
    oArray = [];
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

    checkDraw();
    checkScore();
}

function checkDraw(){
    const allCells = document.querySelectorAll('.cell');
    const winner = document.querySelector('.winnerAnnouncement');
    const anyEmptyCells = (arr, fn = Boolean) => !arr.some(fn);
    cellArray = [];
    for (let i = 0; i<allCells.length; i++){
        cellArray.push(allCells[i].textContent);
    }
    if (anyEmptyCells(cellArray, cell => cell == '')){
        winner.textContent = "It's a tie!";
        startGameBtn.disabled = false;
    }
}   

function checkScore() {
    const scoreDisplay = document.querySelector('.score');
    const winner = document.querySelector('.winnerAnnouncement');
    const allCells = document.querySelectorAll('.cell');
    const winCombinations = [
        [0, 1, 2], [3, 4, 5],[6, 7, 8],
        [0, 3, 6], [1, 4, 7],[2, 5, 8],
        [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i<winCombinations.length; i++){
        winCombination = winCombinations[i];
        let winnerName = '';
        if(winCombination.every(cellLocation => 
            xArray.includes(cellLocation))){
                if (player1.marker === 'X') {
                    winnerName = player1.name;
                    player1.increaseScore();
                    winner.textContent = player1.name + " wins!";
                }
                else{
                    winnerName = player2.name;
                    player2.increaseScore();
                    winner.textContent = player2.name + " wins!";
                }
                allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
                startGameBtn.disabled=false; 
        }
        else if(winCombination.every(cellLocation => 
            oArray.includes(cellLocation))){
                if (player1.marker === 'O') {
                    winnerName = player1.name;
                    player1.increaseScore();
                    winner.textContent = player1.name + " wins!";
                }
                else{
                    winnerName = player2.name;
                    player2.increaseScore();
                    winner.textContent = player2.name + " wins!";
                }
                allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
                startGameBtn.disabled=false; 
        }
    }       
}