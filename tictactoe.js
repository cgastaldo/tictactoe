function Gameboard () {
    gameboard = [];
}

//players stored as objects

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