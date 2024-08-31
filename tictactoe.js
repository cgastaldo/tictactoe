function Gameboard () {
    gameboard = ['', '', '',
                 '', '', '', 
                 '', '', '',];
    return gameboard;
}

function createUser (player, marker){
  this.player = player;
  this.marker = marker;
}

function score(){

}

// Update array with X/O location - Update player P_array with location


function winConditions(player_array){
  win1 = ['0', '1', '2'];
  win2 = ['3', '4', '5'];
  win3 = ['6', '7', '8'];
  win4 = ['0', '3', '6'];
  win5 = ['1', '4', '7'];
  win6 = ['2', '5', '8'];
  win7 = ['0', '4', '8'];
  win8 = ['2', '4', '6'];
  console.log('maybe')
  function checkWin(player_array){
    for (let i = 0; i < 9; i++){
      console.log('yes');
      let win = 'win' + String(i);
      if (player_array.includes(win[0] && win[1] && win[2])){
        alert('Winner'); 
      }
    }
  }
}



function winnerAnnouncment(){
  console.log('YOU WIN!');
}


let empty = new Gameboard();


//object to control the flow of the game

/*
Tuck as much as possible inside factories. Factory example:
function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();

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
1. get working game in console first - logic to check game over - check for all 
winning 3-in-a-rows and ties. Ignore DOM and HTML/CSS until game is working.
2. When game is working, create object that will handle display/DOM logic. Write 
function that render the contents of gameboard array to webpage.
3. Write functions allow players to add marks to specific spot on board
by interacting with the appropriate DOM elements. Prevent players from
playing in spots that are already taken.
4. Clean up interface to allow players to put in their names. Include button to 
start/restart game and add a display element that shows results upon game end.

*/