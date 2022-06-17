'use strict';
const currentScore0El = document.querySelector('#current--0');

const currentScore1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//starting conditions
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

//Rolling dice functionalities
btnRoll.addEventListener('click', function(){
    /*console.log('rolled');  */
    //1. Generating a random dice number
    const dice =Math.trunc( Math.random() * 6) + 1;


    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./image/dice-${dice}.png`;


    //3.Check for a rolled ('1'), if true switch to next player and ..
    if (dice!==1){
        //ADD DICE TO CURRENT SCORE
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
     

    }else{
        //SWITCH TO NEXT PLAYER
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer===0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

        document.querySelector(`#current--${activePlayer}`).textContent = currentScore; 


         currentScore = 0; 
      
    }

});
btnHold.addEventListener('click', function(){
 /*    activePlayer = activePlayer===0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    score0El.textContent = currentScore;
    player1El.classList.toggle('player--active');
    
 currentScore1El.textContent = 0; */
/*  activePlayer = activePlayer===0 ? 1 : 0;
 player0El.classList.toggle('player--active');
 score0El.textContent = currentScore; */
 scores[activePlayer] += currentScore;
 document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
 document.querySelector(`#current--${activePlayer}`).textContent = 0;
 currentScore = 0;
 activePlayer = activePlayer===0 ? 1 : 0;
 player0El.classList.toggle('player--active');
 player1El.classList.toggle('player--active');

 document.querySelector(`#current--${activePlayer}`).textContent = currentScore ; 
 
});
if (scores[activePlayer]>=10){
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

   document
   .querySelector(`.player--${activePlayer}`)
   .classList.add('player--winner');
 }
 btnNew.addEventListener('click', function(){
    location.reload();
 });
   





