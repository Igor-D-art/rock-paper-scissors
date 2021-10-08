
  // Declaring variables that will store conts for number of played rounds, number of computer wins an player wins
  
  let roundCounter =1;
  let computerScore=0;
  let userScore=0;
  let roundResult=''; // declaring the roundResult variable for storing the round result information

 

// Function playRound() invokes function computerPlay() to get computer's selection and then 
// invokes the winnerCheck fucntion to provide the result message for a round and a game. It also increases roundCounter, computerScore and userScore vaiables. 

function playRound() {
  while (computerScore<5 && userScore<5) { // removed logic of playing 5 rounds
    console.log('\n ROUND ' + roundCounter);
    console.log("Computer score: " + computerScore);
    console.log("User's score: " + userScore);
    
    console.log('Player selection= ' + playerSelection);  // logs the player's selection in console
    computerPlay(); // invokes computerPlay function to get the computer's selection
    console.log('Computer selection= ' +computerSelection); // logs the computer's selection in console

    if (playerSelection == "ROCK" && computerSelection=="PAPER") { // this block defines the round winner
        computerScore++;    
        roundResult='\n\nYou loose, paper beats rock!'; 
       } else if (playerSelection == "PAPER" && computerSelection=="SCISSORS") {
        computerScore++;
        roundResult='\n\nYou loose, scissors beat paper!';
       } else if (playerSelection == "SCISSORS" && computerSelection=="ROCK") {
        computerScore++;
        roundResult=('\n\nYou loose, rock beats scissors!');
       } else if (playerSelection == "ROCK" && computerSelection=="ROCK") { 
        roundResult=('\n\nRock vs rock, it is a draw!')
       } else if (playerSelection == "PAPER" && computerSelection=="PAPER") { 
        roundResult=('\n\nPaper vs paper, it is a draw!')
       } else if (playerSelection == "SCISSORS" && computerSelection=="SCISSORS") { 
        roundResult=('\n\nScissors vs scissors, it is a draw!') 
       } else if (playerSelection !=='ROCK' && playerSelection !=='PAPER' && playerSelection!=='SCISSORS') {
           roundResult=('\n\nPlease enter a valid selection i ne pytaysya naebat computer')
       } else { 
        ++userScore;  // increasing the userScore
        roundResult=('\n\nYou win, congrats!');
       }
       document.getElementById ("p-score").innerText = userScore;
       document.getElementById ("c-score").innerText = computerScore;
      
       

       roundCounter++; // increasing the roundCounter
       document.getElementById ("round-n").innerText = roundCounter
       return winnerCheck(); // invokes a function that throws a round and game result messages
        }

      }

      function winnerCheck () {

       if (userScore==5) {
        document.getElementById ("r-result").innerText = '\n\nYou won 5 rounds! Congrats! Want to play one more time - please press F5 =)';
         } else if (computerScore==5) {
          document.getElementById ("r-result").innerText = '\n\nYou loose the game. Computer won 5 rounds. Want to play one more time - please press F5 =)';
         } else {document.getElementById ("r-result").innerText = roundResult;}

      }

    function userPlay(){
      const playerInput = document.querySelectorAll('button');
      playerInput.forEach((button) => 
        button.addEventListener ('click', () => {
          playerSelection = button.id;
          return playerSelection + playRound();
          })
        );
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
         
         
 //playRound();
 userPlay();
