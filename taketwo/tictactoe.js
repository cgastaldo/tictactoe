const gameBoard = document.querySelector('#gameBoard');
let xArray = [];
let oArray = [];
let turn = 'X';
let player1Score = 0;
let player2Score = 0;

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

    const currentTurn = document.createElement('p');
    const startGameBtn = document.createElement('button');
    const startGameBtnContainer = document.createElement('div');
    scoreDisplayContainer.classList.add('scoreContainer');
    scoreDisplayTitle.classList.add('displayTitle');
    scoreDisplayNames.classList.add('displayNames');
    scoreDisplayScores.classList.add('displayScores');
    scoreDisplayName1p.classList.add('displayName1');
    scoreDisplayName2p.classList.add('displayName2');
    scoreDisplayScorePlayer1p.classList.add('displayScorePlayer1');
    scoreDisplayScorePlayer2p.classList.add('displayScorePlayer2');

    currentTurn.classList.add('turn');
    scoreDisplayTitle.textContent = "Player Scores";
    startGameBtn.textContent = "Start Game";
    currentTurn.textContent = "X goes first";

    infoPanelGame.append(scoreDisplayContainer);
    scoreDisplayContainer.append(scoreDisplayTitle);
    scoreDisplayContainer.append(scoreDisplayNames);
    scoreDisplayNames.append(scoreDisplayName1p);
    scoreDisplayNames.append(scoreDisplayName2p);
    scoreDisplayScores.append(scoreDisplayScorePlayer1p);
    scoreDisplayScores.append(scoreDisplayScorePlayer2p);

    scoreDisplayContainer.append(scoreDisplayScores);
    infoPanelGame.append(currentTurn);
    infoPanelGame.append(startGameBtnContainer);
    startGameBtnContainer.append(startGameBtn)
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

//DISABLE START GAME AND ENABLE AFTER USER INFO FULL
//INFORM PLAYER OF THE ABOVE
//HAVE TO HANDLE DRAW
const startGameBtn = document.querySelector('button');

startGameBtn.addEventListener('click', () => {
    const player1Name = getPlayerName("player1");
    const player2Name = getPlayerName("player2");
    const markerValue = getRadioValue();
    const scoreDisplayName1= document.querySelector('.displayName1');
    const scoreDisplayName2= document.querySelector('.displayName2');
    let displayPlayer1Score = document.querySelector('.displayScorePlayer1');
    let displayPlayer2Score = document.querySelector('.displayScorePlayer2')

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

    scoreDisplayName1.append(player1Name);
    scoreDisplayName2.append(player2Name);


    displayPlayer1Score.append(player1Score);
    displayPlayer2Score.append(player2Score);


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
        let winnerName = '';
        if(winCombination.every(cellLocation => 
            xArray.includes(cellLocation))){
                if (player1.marker === 'X') {
                    winnerName = player1.name;
                }
                else{
                    winnerName = player2.name;
                }
                scoreDisplay.textContent = winnerName + " wins!";
                allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
                startGameBtn.disabled=false; 
        }
        else if(winCombination.every(cellLocation => 
            oArray.includes(cellLocation))){
                if (player1.marker === 'O') {
                    winnerName = player1.name;
                }
                else{
                    winnerName = player2.name;
                }
                scoreDisplay.textContent = winnerName + " wins!";
                allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
                startGameBtn.disabled=false; 
        }
    }       
}