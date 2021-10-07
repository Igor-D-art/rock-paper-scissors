
  // Declaring variables that will store conts for number of played rounds, computer wins an player wins
  
  let roundCounter =1;
  let computerScore=0;
  let userScore=0;

// Function playGame() invokes function playRound and makes the game last till a player or a computer has wins count
// equal to 5 

playGame();

function playGame () {
    while (computerScore<5 && userScore<5) {
        console.log('\n ROUND ' + roundCounter);
        console.log("Computer score: " + computerScore);
        console.log("User's score: " + userScore);
        playRound();
    } 
    if (computerScore==5) {
      alert('You loose the game. Coputer won 5 rounds. Want to play one more time - please press F5 =)');
     } else {
      alert('You won 5 rounds! Congrats! Want to play one more time - please press F5 =)');
     }
    }

// Function playRound() invokes functions userPlay() and computerPlay() to get user's and computer's selection and then 
// defines the winner for a round. It also increases roundCounter, computerScore and userScore vaiables. 

function playRound() {

    userPlay(); // inokes userPlay function to get the user's selection
    console.log('Player selection= ' + playerSelection);  // logs the player's selection in console
    computerPlay(); // invokes computerPlay function to get the computer's selection
    console.log('Computer selection= ' +computerSelection); // logs the computer's selection in console

   let roundResult=''; // declaring the roundResult variable for storing the round result information

    if (playerSelection == "ROCK" && computerSelection=="PAPER") { // this block defines the round winner
           roundResult='You loose, paper beats rock!';
           computerScore++;
       } else if (playerSelection == "PAPER" && computerSelection=="SCISSORS") {
        computerScore++;
        roundResult=('You loose, scissors beat paper!' + '\nYour score: ' + userScore + '\nComputer score: ' +
         computerScore);
       } else if (playerSelection == "SCISSORS" && computerSelection=="ROCK") {
        computerScore++;
        roundResult=('You loose, rock beats scissors!' + '\nYour score: ' + userScore + '\nComputer score: ' +
         computerScore);
       } else if (playerSelection == "ROCK" && computerSelection=="ROCK") { 
        roundResult=('Rock vs rock, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + 
        computerScore)
       } else if (playerSelection == "PAPER" && computerSelection=="PAPER") { 
        roundResult=('Paper vs paper, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + 
        computerScore)
       } else if (playerSelection == "SCISSORS" && computerSelection=="SCISSORS") { 
        roundResult=('Scissors vs scissors, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + 
        computerScore) 
       } else if (playerSelection !=='ROCK' && playerSelection !=='PAPER' && playerSelection!=='SCISSORS') {
           roundResult=('Please enter a valid selection i ne pytaysya naebat computer' + '\nYour score: ' + userScore 
           + '\nComputer score: ' + computerScore)
       } else { 

        userScore++;  // increasing the userScore

        roundResult=('You win, congrats!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore);
       }

       roundCounter++; // increasing the roundCounter

       return alert(roundResult); // returning the alert with one of the above results

    }

    function userPlay(){
        const playerInput =(prompt('Please choose one of the three: Rock, Paper or Scissors')); 
        playerSelection=playerInput.toUpperCase();
        return(playerSelection);
        }

      
        function computerPlay() {
           const compInput= Math.floor(Math.random()*3);
           if (compInput ==2) {
            computerSelection='SCISSORS'
         } else if (compInput ==1) {
            computerSelection='PAPER'
         } else {computerSelection="ROCK"}
           return(computerSelection);
         }
         

