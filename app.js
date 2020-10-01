import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-results.js';

const playButtonVar = document.getElementById('playButton');
const restartButton = document.getElementById('restart-button');

const gameWonLostOrDraw = document.getElementById('gameWonLostOrDrawSpan');
const numOfWin = document.getElementById('numOfWinSpan');
const numOfLosses = document.getElementById('numOfLoseSpan');
const numOfDraws = document.getElementById('numOfDrawsSpan');
const compThrow = document.getElementById('computerThrewSpan');
const resetSpan = document.getElementById('reset-span');



// initialize state

let wins = 0;
let losses = 0;
let draws = 0;
let restarts = 0;



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
    
    
    compThrow.textContent = computerThrow;
    numOfWin.textContent = wins;
    numOfDraws.textContent = draws;
    numOfLosses.textContent = losses;

});


restartButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    restarts++
    numOfWin.textContent = wins;
    numOfDraws.textContent = draws;
    numOfLosses.textContent = losses;
    resetSpan.textContent = restarts;
});