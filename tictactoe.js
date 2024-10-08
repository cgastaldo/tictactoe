const Gameboard = (function(){
  let board = Array(9).fill('');

  const setBoard =  (index, marker) => {
    if (index >=0 && index < board.length && board[index] === ''){
      board[index] = marker;
      return true;
    }
    return false;
  };

  const getField = (index) => board[index];

  const resetBoard = () => {
    board = Array(9).fill('');
  };

  const getBoard = () => board;

  return {setBoard, getField, resetBoard, getBoard};
})();

function createUser(name, marker, array){
  this.name = name;
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
      return true;
    };
  }
}

//Collect user1 and user2 information and create new
const user1_name = document.querySelector('#user1Name');
const user1_radioBtns = document.querySelectorAll('input[name="marker1"]');
const nameBtn1 = document.querySelector('.acceptUser1');
nameBtn1.addEventListener('click', ()=>{
  let selectedMarker;
  for (const user1_radioBtn of user1_radioBtns) {
    if (user1_radioBtn.checked){
      selectedMarker = user1_radioBtn.value;
      break;
    }
  }
  init_array = [];
  user1 = new createUser(user1Name.value, selectedMarker, init_array);
  
})

const user2_name = document.querySelector('#user2Name');
const user2_radioBtns = document.querySelectorAll('input[name="marker2"]');
const nameBtn2 = document.querySelector('.acceptUser2');
nameBtn2.addEventListener('click', ()=>{
  let selectedMarker;
  for (const user2_radioBtn of user2_radioBtns) {
    if (user2_radioBtn.checked){
      selectedMarker = user2_radioBtn.value;
      break;
    }
  }
  init_array = [];
  user2 = new createUser(user2Name.value, selectedMarker, init_array);
})



const information = document.getElementById('information');
const user2_info = document.createElement('div');
const game_info = document.createElement('div');


/* Problems
1. 
2. Disable Start Game until user 1 and user 2 values input
3. Remove user 2 X/O selection and add text that says value 
   is based on user 1 selection
4. Create score board
5. Add background
6. Start Game begins a new game when previous game done

*/




function cycleTurn(){
  if (user1_turn===1){
    marker = user1.marker;
    user_array = user1.array;
    user1_turn = 0;
    return [marker, user_array];
  }
  else{
    marker = user2.marker;
    user_array = user2.array;
    user1_turn = 1;
    return [marker, user_array];
  }
}

function gameLogic(cell, i){
  current_marker = cycleTurn()[0];
  current_array = cycleTurn()[1];
  cycleTurn();
  player1_array = user1.array;
  player2_arrray = user2.array;
  console.log(current_array, current_marker);
  cell.innerText = current_marker;
  userArray(current_array, String(i));
  console.log(String(i));
  if (winConditions(user1.array) === true){
    console.log(user1.player + ' wins!');
    game_status = 0; //disable game
  }
  else if (winConditions(user2.array) === true){
      console.log(user2.player + ' wins!')
      game_status = 0;
  }
}

//New game button initiate and allow game
const newGame = document.getElementById('startGame');
newGame.addEventListener('click', ()=>{

  const gameGrid = document.getElementById('grid');
  for (let i=0; i<9; i++){
    new_board = Gameboard();
    const cell = document.createElement('div');
    cell.className = 'cell' + String(i);
    gameGrid.appendChild(cell);
    cell.innerText = new_board[i];
  }
  user1_turn = 1;
  game_status = 1;
  for (let i=0; i<9; i++){
    current_cell = '.cell' + String(i);
    const cell = document.querySelector(current_cell);
    if (game_status =1){
      cell.addEventListener('click', gameLogic(cell, i), {once:true});
    }
    else if (game_status=0){
      cell.removeEventListener('click', gameLogic(cell, i));
    }
  }
})


if (user1.marker === 'X'){
  
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

4.  Include button to 
start/restart game and add a display element that shows results upon game end.

*/