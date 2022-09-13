/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let userGuess = '';
let pearlLocation = '';

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */

/* Component */
// get DOM
let guessButtons = document.getElementById('guesses');
let shellOne = document.getElementById('shell-1');
let shellTwo = document.getElementById('shell-2');
let shellThree = document.getElementById('shell-3');
let pearlOne = document.getElementById('pearl-1');
let pearlTwo = document.getElementById('pearl-2');
let pearlThree = document.getElementById('pearl-3');
let displayOne = document.getElementById('display-1');
let displayTwo = document.getElementById('display-2');
let displayThree = document.getElementById('display-3');
let playAgainButton = document.getElementById('play-again-button');

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
                    displayThree.textContent = 'Not Here!';
                    break;
            }
            break;
    }
}
// event listeners

/* Run page load code */
loadPage();
