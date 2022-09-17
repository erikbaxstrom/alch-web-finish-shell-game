/* Imports */
import { getRandomItem } from './utils.js';
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let userGuess = '';
let pearlLocation = '';
let wins = 0;
let losses = 0;

const probabilityArray = ['left', 'middle', 'right'];

/* Actions */
function loadPage() {
    displayScoreboard();
    displayShells();
}

function makeGuess(guess) {
    pearlLocation = getRandomItem(probabilityArray);
    if (guess === pearlLocation) {
        gameState = 'win';
        wins++;
    } else {
        gameState = 'lose';
        losses++;
    }
    userGuess = guess;
    displayShells();
    displayScoreboard();
}

/* Components */

/* Component Display Shells*/
// get DOM
const guessButtons = document.getElementById('guesses');
const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');
const pearlOne = document.getElementById('pearl-1');
const pearlTwo = document.getElementById('pearl-2');
const pearlThree = document.getElementById('pearl-3');
const displayOne = document.getElementById('display-1');
const displayTwo = document.getElementById('display-2');
const displayThree = document.getElementById('display-3');
const playAgainButton = document.getElementById('play-again-button');
const buttonOne = document.getElementById('guess-1');
const buttonTwo = document.getElementById('guess-2');
const buttonThree = document.getElementById('guess-3');

// display
function displayShells() {
    switch (gameState) {
        case 'guess':
            guessButtons.classList.remove('hidden');
            shellOne.classList.remove('reveal');
            shellTwo.classList.remove('reveal');
            shellThree.classList.remove('reveal');
            pearlOne.classList.add('hidden');
            pearlTwo.classList.add('hidden');
            pearlThree.classList.add('hidden');
            displayOne.textContent = '';
            displayTwo.textContent = '';
            displayThree.textContent = '';
            playAgainButton.classList.add('hidden');
            break;
        case 'win':
            guessButtons.classList.add('hidden');
            playAgainButton.classList.remove('hidden');
            switch (userGuess) {
                case 'left':
                    shellOne.classList.add('reveal');
                    pearlOne.classList.remove('hidden');
                    displayOne.textContent = 'Found it!';
                    break;
                case 'middle':
                    shellTwo.classList.add('reveal');
                    pearlTwo.classList.remove('hidden');
                    displayTwo.textContent = 'Found it!';
                    break;
                case 'right':
                    shellThree.classList.add('reveal');
                    pearlThree.classList.remove('hidden');
                    displayThree.textContent = 'Found it!';
                    break;
            }
            break;
        case 'lose':
            guessButtons.classList.add('hidden');
            playAgainButton.classList.remove('hidden');
            switch (userGuess) {
                case 'left':
                    shellOne.classList.add('reveal');
                    displayOne.textContent = 'Not Here!';
                    break;
                case 'middle':
                    shellTwo.classList.add('reveal');
                    displayTwo.textContent = 'Not Here!';
                    break;
                case 'right':
                    shellThree.classList.add('reveal');
                    displayThree.textContent = 'Not Here!';
                    break;
            }
            switch (pearlLocation) {
                case 'left':
                    pearlOne.classList.remove('hidden');
                    shellOne.classList.add('reveal');
                    break;
                case 'middle':
                    pearlTwo.classList.remove('hidden');
                    shellTwo.classList.add('reveal');
                    break;
                case 'right':
                    pearlThree.classList.remove('hidden');
                    shellThree.classList.add('reveal');
                    break;
            }
            break;
    }
}
// event listeners
buttonOne.addEventListener('click', () => {
    makeGuess('left');
});
buttonTwo.addEventListener('click', () => {
    makeGuess('middle');
});
buttonThree.addEventListener('click', () => {
    makeGuess('right');
});

/* Component Play Again*/
// get DOM
// already got playAgainButton element above

// display
function playAgain() {
    gameState = 'guess';
    userGuess = '';
    pearlLocation = '';
    displayShells();
}

// event listeners
playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Component Play Again*/
// get DOM
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

// display
function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    totalDisplay.textContent = wins + losses;
}
// event listeners

/* Run page load code */
loadPage();
