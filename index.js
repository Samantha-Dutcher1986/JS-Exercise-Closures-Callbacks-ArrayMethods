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
 * Counter1 defines count within the first function, making it only accessible within that specific code block. Counter2 code defines count globally so it would be accessed anywhere within the JS file.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 is a closure because it's a function inside of another function that is referencing a variable that's been defined outside of itself
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *If you wanted to be able to access the variable "count" without haveing to redeclare it later within the same JS file, then counter1 code would be preferable. If you only need count to be delcared for a specific code block then counter2 would be better/
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++; //closure bc it's a function inside of a function referencing a variable defined outside of itself
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
const randomScore = Math.floor(Math.random() * 3);
return randomScore();
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

function finalScore(cb, number){
  let home = 0;
  let away = 0;
  for(let i = 0; i < num; i++){
    home = home + cb();
    away = away + cb();
  }
  return(away, home)
}
console.log(finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

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

function scoreboard(cbGIS, cbInning, num) {
  let scores = [];
  for(let i = 0; i < num; i++){
    scores.push(`Inning ${i+1}: ${cbGIS(cbInning, 2)}`)
  }
  return scoreboard;
}
console.log(finalScore(inning, 2));

