import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './checkResults.js';

// import functions and grab DOM elements
/*const rockSelectVar = document.getElementById('rockSelect');
const paperSelectVar = document.getElementById('paperSelect');
const scizzorSelectVar = document.getElementById('scizzorSelect');
*/

const playButtonVar = document.getElementById('playButton');

const gameWonLostOrDraw = document.getElementById('gameWonLostOrDrawSpan');
let numOfWin = document.getElementById('numOfWinSpan');
let numOfLosses = document.getElementById('numOfLoseSpan');
let numOfDraws = document.getElementById('numOfDrawsSpan');


// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

playButtonVar.addEventListener('click', () => {

    const selectedRadioInput = document.querySelector(':checked');
    const userPick = selectedRadioInput.value;
    console.log(userPick);

    const computerThrow = getRandomThrow();

    const result = checkResults(userPick, computerThrow);
    
    if (result === 'draw') {
        draws++;
        gameWonLostOrDraw.textContent = 'It\'s a draw!';
    } else if (result === 'win') {
        wins++;
        gameWonLostOrDraw.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        gameWonLostOrDraw.textContent = 'You lost.';
    }
    
    

    numOfWin.textContent = wins;
    numOfDraws.textContent = draws;
    numOfLosses.textContent = losses;

});


/*const draw;

if (rockSelectVar === getRandomThrow = 1 || paperSelectVar === getRandomThrow = 1 ||) {
    gameWonLostOrDraw.textContent = `It's a draw!`
};

con
*/

// set event listeners to update state and DOM
