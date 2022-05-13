'use strict';

/* This script begins with user welcome message */
let score = 0;

let userResponse = prompt ('Hey there, what is your name?');
//console.log ('Hey there, what is your name?');
alert ('Nice to meet you ' + ', ' + userResponse + '! ' + 'Lets play a guessing game! ');

/* This is where user will be asked 5 yes or no questions */

let guessOne = prompt ('Do I like music?').toLowerCase();

if (guessOne === 'yes'|| guessOne === 'y'){
//console.log ('You are right!');
  alert ('You are right!');
  score++;

} else if (guessOne === 'no' || guessOne === 'n'){
//console.log ('Actually, I do. Hip hop is my favorite!');
  alert ('Actually, I do. Hip hop is my favorite!');

}

let guessTwo = prompt ('Do I have any siblings or am I the only child?').toLowerCase ();

if(guessTwo ==='yes' || guessTwo === 'y'){
  //console.log ('You guess it!');
  alert ('You guess it!');
  score++;

} else if (guessTwo === 'no' || guessTwo === 'n') {
  //console.log ('Nope. I have two brothers!');
  alert ('Nope. I have two brothers!');

}

let guessThree = prompt ('Do I know how to play sports?').toLowerCase ();

if (guessThree === 'yes'|| guessThree === 'y') {
  //console.log ('Yes, but only one sport lol');
  alert ('Yes, but only one sport lol');
  score++;

} else if (guessThree === 'no' || guessThree === 'n') {
  //console.log ('Sorry, I can. Not professionally tho!');
  alert ('Sorry, I can. Not professionally tho!');

}

let guessFour = prompt ('Have I zipped lined before?').toLowerCase();

if (guessFour === 'yes' || guessFour === 'y') {
  //console.log ('Yes I have. It is alot of fun!');
  alert ('Yes I have. It is alot of fun!');
  score++;

} else if (guessFour === 'no' || guessFour === 'n') {
  //console.log ('Sorry, I actually have zipped lined before');
  alert ('Sorry, I actually have zipped lined before ');

}

let guessFive = prompt ('Do I have any pets?').toLowerCase ();

if (guessFive === 'yes' || guessFive === 'y') {
  //console.log ('Yes, you are right!');
  alert ('Yes, you are right!');
  score++;

} else if ( guessFive === 'no' || guessFive === 'n') {
  //console.log ('Sorry, I have a cat. Trust me she is friendly!');
  alert ('Sorry, I have a cat. Trust me she is friendly!');

}




for (let i = 0; i < 4; i++) {
  let GuessSix = prompt ('How many plants do I have?');
  if (GuessSix === '4'){
    alert ('You are correct!');
    score++;
    i = 4;
    break;
  } else if (GuessSix > '4') {
    alert ('Too high. Try again!');
  } else if (GuessSix < '4') {
    alert ('Sorry too low. Try again!');
  }

  if (i === 3) {
    alert ('Nice try, but out of guesses. Answer is 4');
  }

}


let myColors = ['blue', 'yellow', 'black', 'pink'];


for ( let i = 0; i < 6; i++) {
  let favoriteColors = prompt ('Which are my favorite colors').toLowerCase ();
  for (let j = 0; j < myColors.length; j++) {
    if (favoriteColors === myColors [j]) {
      alert ('Yes, love those colors!');
      score++;
      i = 6;
      break;
    }
  }
}

alert(`My favorite colors are ${myColors}`);

alert (`Your score was ${score} out of 7`);





























