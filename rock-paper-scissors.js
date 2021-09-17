// player inputs the selection through prompt. The selection is recorded into playerSelection variable an is uppercased
// for the further cmparison with the computerSelection


let playerInput =(prompt('Please choose one of the three: Rock, Paper or Scissors'));
const playerSelection = playerInput.toUpperCase();
console.log (playerSelection);

// Constant that makes computer selection by assigning random number within 0, 1 or 2 and turning it into ROCK, PAPER
// or SCISSORS

let computerSelection = computerPlay();

function computerPlay() {
   let compInput= Math.floor(Math.random()*3);
   if (compInput ==2) {
    compInput='SCISSORS'
 } else if (compInput ==1) {
    compInput='PAPER'
 } else {compInput="ROCK"}
   return(compInput);
 }
console.log(computerSelection);

// Function playRound() gets user's and computer's selections and defines the winner throwing an alert

function playRound(playerSelection, computerSelection) {
   let roundResult; 
    if (playerSelection == "ROCK" && computerSelection=="PAPER") {
           roundResult='You loose, paper beats rock!'
       } else if (playerSelection == "PAPER" && computerSelection=="SCISSORS") {
        roundResult='You loose, scissors beat paper!'
       } else if (playerSelection == "SCISSORS" && computerSelection=="ROCK") {
        roundResult='You loose, rock beats scissors!'
       } else if (playerSelection == "ROCK" && computerSelection=="ROCK") { 
        roundResult='Rock vs rock, it is a draw!'
       } else if (playerSelection == "PAPER" && computerSelection=="PAPER") { 
        roundResult='Paper vs paper, it is a draw!'
       } else if (playerSelection == "SCISSORS" && computerSelection=="SCISSORS") { 
        roundResult='Scissors vs scissors, it is a draw!' 
       } else if (playerSelection !=='ROCK' && playerSelection !=='PAPER' && playerSelection!=='SCISSORS') {
           roundResult='Please enter a valid selection i ne pytaysya naebat computer'
       } else { roundResult='You win, congrats!' }

       return alert(roundResult);
    }
    
  console.log(playRound(playerSelection, computerSelection));

  // function game() 
   