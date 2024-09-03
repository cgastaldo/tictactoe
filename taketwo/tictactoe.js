
const gameBoard = document.querySelector('#gameBoard');
const info = document.querySelector('#information');
let initialCells = Array(9).fill('');
let turn = 'X';

let xArray = [];
let oArray = [];

info.textContent = "Circle goes first"

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
        xArray.push(e.target.id);
    }
    else {
        oArray.push(e.target.id);
    }
    // If turn equals X, change to O otherwise, keep X
    turn = turn === 'X' ? 'O' : 'X';
    info.textContent = "it is now " + turn + "'s turn";
    e.target.removeEventListener('click', addTurn);
    checkScore()
}


//get this function to check against xArray and oArray
function checkScore() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5],[6, 7, 8],
        [0, 3, 6], [1, 4, 7],[2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    console.log(xArray, oArray)
    for (let i = 0; i<winCombinations.length; i++){
        win = winCombinations[i];
        if(win.every(element => xArray.includes(element))){
            console.log('true');
            return true;
        }
    }
    
            
}
