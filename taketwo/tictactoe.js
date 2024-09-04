
const gameBoard = document.querySelector('#gameBoard');

let initialCells = Array(9).fill('');
let turn = 'X';

let xArray = [];
let oArray = [];


//Create user input sections for names and marker type 
//Add start game button
//Create display that states turn and current score
function createInfoDisplay(){
    const infoPanel = document.querySelector('#information');
    const infoPanelPlayers = document.createElement('div');
    const infoPanelGame = document.createElement('div');
    infoPanelPlayers.classList.add('playerInfo');
    infoPanelGame.classList.add('gameInfo');
    infoPanel.appendChild(infoPanelPlayers);
    infoPanel.appendChild(infoPanelGame);

    const player1Name = createElement('input');
    const player2Name = createElement('input');
    player1Name = "text";
    player1Name.classList = 'user'
    infoPanelPlayers.appendChild(player1Name);
    infoPanelPlayers.appendChild(player2Name);
}

createInfoDisplay();

function getPlayerInfo(){
    const player1Name = createElement('input');
    const player2Name = createElement('input');
    player1Name = "text";
    player1Name.classList = 'user'
    infoPanelPlayers.appendChild(player1Name);
    infoPanelPlayers.appendChild(player2Name);

}




function createBoard(){
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
    e.target.innerText = turn;
    if (turn === 'X'){
        xArray.push(Number(e.target.id));
    }
    else {
        oArray.push(Number(e.target.id));
    }
    // If turn equals X, change to O otherwise, keep X
    turn = turn === 'X' ? 'O' : 'X';
    //info.textContent = "it is now " + turn + "'s turn";
    e.target.removeEventListener('click', addTurn);
    checkScore()
}

function checkScore() {
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
            //info.textContent = "X wins.";
            allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
        }
        else if(winCombination.every(cellLocation => 
            oArray.includes(cellLocation))){
            //info.textContent = "O wins.";
            allCells.forEach(cell => 
                cell.replaceWith(cell.cloneNode(true)));
        }
    }         
}
