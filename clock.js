// const clock = document.getElementById('clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());


// setInterval(function(){
//   let date = new Date();
// console.log(date.toLocaleTimeString());
// clock.innerHTML = date.toLocaleTimeString();
  
// }, 1000);

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let pervGuess = [];
let newGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number more than 1');
    } else if (guess > 100) {
        alert('please enter a  number less than 100');
    } else {
        pervGuess.push(guess);
        if (newGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}




function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('you guesses it right');
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is TOO Low');
    } else if (guess > randomNumber) {
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    newGuess++;
    remaining.innerHTML = `${11 - newGuess}`;
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = ` <button id = "newGame">Start New Game</button>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()

}

function newGame() {
   const newGameButton =  document.querySelector('#newGame');

   newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    pervGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11  - newGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   });

}
