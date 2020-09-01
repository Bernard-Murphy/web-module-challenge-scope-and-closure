// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 creates a counter that uses a variable "count" that is local to the function that increments it every pass. Counter2's function does the same thing, but it uses a global variable "count" instead of a local.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses closure because it uses a variable that is local to the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter1 would be preferable in a code with multiple counter functions or any code where "count" would be desired as a variable name more than once. Counter2 would be preferable in a code where "count" is only expected to be used once. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return (Math.floor((Math.random() * 3)));

}

console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(func, num){
  retObject = {
    "Home": 0,
    "Away": 0
  }


  for (i = 0; i < num; i++){
      retObject.Home += func();
      retObject.Away += func();
  }

  return retObject

}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(func){
  let home = func();
  let away = func();
  return [home, away]
}

function scoreboard(inningScoreFunc, inningFunc, num) {
  let scoreboard = [];
  let awayTally = 0;
  let homeTally = 0;
  for (let i = 1; i < num + 1; i++){
    let score = inningScoreFunc(inningFunc);
    awayTally += score[0];
    homeTally += score[1];
    if (i === 1){
      scoreboard.push(`${i}st inning: ${score[0]} - ${score[1]}`);
    } else if (i === 2 ){
      scoreboard.push(`${i}nd inning: ${score[0]} - ${score[1]}`);
    } else if (i === 3){
      scoreboard.push(`${i}rd inning: ${score[0]} - ${score[1]}`);
    } else {
      scoreboard.push(`${i}th inning: ${score[0]} - ${score[1]}`);
    }
    
  }
  scoreboard.push(`Final Score: ${awayTally} - ${homeTally}`);
  return scoreboard
}


console.log(scoreboard(getInningScore, inning, 9));