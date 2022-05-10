'use strict';

/* This script begins with user welcome message */

let userResponse = prompt ('Hey there, what is your name?');
console.log ('Hey there, what is your name?');
alert ('Nice to meet you ' + ', ' + userResponse + '! ' + 'Lets play a guessing game! ');

/* This is where user will be asked 5 yes or no questions */

let guessOne = prompt ('Do I like music?').toLowerCase();

if (guessOne === 'yes'|| guessOne === 'y'){
  //console.log ('You are right!');
  alert ('You are right!');

} else if (guessOne === 'no' || guessOne === 'n'){
  //console.log ('Actually, I do. Hip hop is my favorite!');
  alert ('Actually, I do. Hip hop is my favorite!');

}

let guessTwo = prompt ('Do I have any siblings or am I the only child?').toLowerCase ();

if(guessTwo ==='yes' || guessTwo === 'y'){
  //console.log ('You guess it!');
  alert ('You guess it!');

} else if (guessTwo === 'no' || guessTwo === 'n') {
  //console.log ('Nope. I have two brothers!');
  alert ('Nope. I have two brothers!');

}

let guessThree = prompt ('Do I know how to play sports?').toLowerCase ();

if (guessThree === 'yes'|| guessThree === 'y') {
  //console.log ('Yes, but only one sport lol');
  alert ('Yes, but only one sport lol');

} else if (guessThree === 'no' || guessThree === 'n') {
  console.log ('Sorry, I can. Not professionally tho!');
  alert ('Sorry, I can. Not professionally tho!');

}

let guessFour = prompt ('Have I zipped lined before?').toLowerCase();

if (guessFour === 'yes' || guessFour === 'y') {
  //console.log ('Yes I have. It is alot of fun!');
  alert ('Yes I have. It is alot of fun!');

} else if (guessFour === 'no' || guessFour === 'n') {
  //console.log ('Sorry, I actually have zipped lined before');
  alert ('Sorry, I actually have zipped lined before ');

}

let guessFive = prompt ('Do I have any pets?').toLowerCase ();

if (guessFive === 'yes' || guessFive === 'y') {
  //console.log ('Yes, you are right!');
  alert ('Yes, you are right!');

} else if ( guessFive === 'no' || guessFive === 'n') {
  //console.log ('Sorry, I have a cat. Trust me she is friendly!');
  alert ('Sorry, I have a cat. Trust me she is friendly!');

}

