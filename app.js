import {getRandomThrow } from './get-random-throw.js';

// import functions and grab DOM elements
/*const rockSelectVar = document.getElementById('rockSelect');
const paperSelectVar = document.getElementById('paperSelect');
const scizzorSelectVar = document.getElementById('scizzorSelect');
*/

const playButtonVar = document.getElementById('playButton');

const gameWonLostOrDraw = document.getElementById('gameWonLostOrDrawSpan');
const numOfWin = document.getElementById('numOfWinSpan');
const numOfLose = document.getElementById('numOfLoseSpan');
const numOfDraws = document.getElementById('numOfDrawsSpan');


// initialize state

playButtonVar.addEventListener('click', () => {

    const selectedRadioInput = document.querySelector(':checked');
    const userPick = selectedRadioInput.value;
    console.log(userPick);

    const gameWonLostOrDraw;

    if (userPick = 'rock!' && landedOn = 'scizzors!')

});


/*const draw;

if (rockSelectVar === getRandomThrow = 1 || paperSelectVar === getRandomThrow = 1 ||) {
    gameWonLostOrDraw.textContent = `It's a draw!`
};

con
*/

// set event listeners to update state and DOM
