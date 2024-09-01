function Gameboard () {
  let gameboard = ['', '', '',
                  '', '', '', 
                  '', '', '',]; 
  return gameboard;
}

function createUser(player, marker, array){
  this.player = player;
  this.marker = marker;
  this.array = array;

  let score = 0;
  const getScore = () => score;
  const increaseScore = () => score++;

  return {player, marker, array, getScore, increaseScore};
}

function userArray (player_array, grid_location){
  return player_array.push(grid_location);
}

function winConditions(player_array){
  win_possibilities = [['0', '1', '2'], ['3', '4', '5'],
      ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'],
      ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];

  for (i=0; i<win_possibilities.length; i++){
    win = win_possibilities[i];
    if (win.every(element => player_array.includes(element))){
      console.log(win);
    };
  }

}

const information = document.getElementById('information');
const user2_info = document.createElement('div');
const game_info = document.createElement('div');

const user1_name = document.querySelector('#user1Name');
const user1_radioBtns = document.querySelectorAll('input[name="marker1"]');
const nameBtn = document.querySelector('.acceptUser1');
nameBtn.addEventListener('click', ()=>{
  let selectedMarker;
  for (const user1_radioBtn of user1_radioBtns) {
    if (user1_radioBtn.checked){
      selectedMarker = user1_radioBtn.value;
      break;
    }
  }
  user1 = new createUser(user1Name.value, selectedMarker)
})

















let empty = new Gameboard();

const gameGrid = document.getElementById('grid');
for (let i=0; i<9; i++){
  new_board = Gameboard();
  const cell = document.createElement('div');
  cell.className = 'cell' + String(i);
  gameGrid.appendChild(cell);
  cell.innerText = new_board[i];
}


function clicker(){
  cell0.innerText = 'X';
  console.log('0');
}

user1_array = [];

for (let i=0; i<9; i++){
  new_board = Gameboard();
  current_cell = '.cell' + String(i);
  const cell = document.querySelector(current_cell);
  cell.addEventListener('click', ()=> {
    cell.innerText = 'X';
    userArray(user1_array, i);
    console.log(String(i));
  }, {once:true})
}

//object to control the flow of the game

/*
IIFE example:
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8

Where should logic reside?
game - Player wins, selecting X/O for player, starting/restarting
player - X or O, player name,  
gameboard - empty spots, 'X' location, 'O' location, win conditions


Goals
2. When game is working, create object that will handle display/DOM logic. Write 
function that render the contents of gameboard array to webpage.

4. Clean up interface to allow players to put in their names. Include button to 
start/restart game and add a display element that shows results upon game end.

*/