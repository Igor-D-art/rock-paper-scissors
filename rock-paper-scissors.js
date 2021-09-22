
  let roundCounter =1;
  let computerScore=0;
  let userScore=0;

// Function playRound() gets user's and computer's selections and defines the winner throwing an alert

playGame();

function playGame () {
    while (computerScore<5 && userScore<5) {
        console.log('\n ROUND ' + roundCounter);
        console.log("Computer score: " + computerScore);
        console.log("User's score: " + userScore);
        playRound();
    } 
    if (computerScore==5) {
      alert('You loose the game. Coputer won 5 rounds. Want to play one more time - please reload the page =)');
     } else {
      alert('You won 5 rounds! Congrats! Want to play one more time - please reload the page =)');
     }
    }

function playRound() {
    userPlay();
    console.log('Player selection= ' + playerSelection);
    computerPlay();
    console.log('Computer selection= ' +computerSelection);
   let roundResult=''; 
    if (playerSelection == "ROCK" && computerSelection=="PAPER") {
           roundResult='You loose, paper beats rock!';
           computerScore++;
       } else if (playerSelection == "PAPER" && computerSelection=="SCISSORS") {
        computerScore++;
        roundResult=('You loose, scissors beat paper!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore);
       } else if (playerSelection == "SCISSORS" && computerSelection=="ROCK") {
        computerScore++;
        roundResult=('You loose, rock beats scissors!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore);
       } else if (playerSelection == "ROCK" && computerSelection=="ROCK") { 
        roundResult=('Rock vs rock, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore)
       } else if (playerSelection == "PAPER" && computerSelection=="PAPER") { 
        roundResult=('Paper vs paper, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore)
       } else if (playerSelection == "SCISSORS" && computerSelection=="SCISSORS") { 
        roundResult=('Scissors vs scissors, it is a draw!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore) 
       } else if (playerSelection !=='ROCK' && playerSelection !=='PAPER' && playerSelection!=='SCISSORS') {
           roundResult=('Please enter a valid selection i ne pytaysya naebat computer' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore)
       } else { 
        userScore++;  
        roundResult=('You win, congrats!' + '\nYour score: ' + userScore + '\nComputer score: ' + computerScore);
       }
       roundCounter++;
       return alert(roundResult);

    }

    function userPlay(){
        let playerInput =(prompt('Please choose one of the three: Rock, Paper or Scissors'));
        playerSelection=playerInput.toUpperCase();
        return(playerSelection);
        }

      
        function computerPlay() {
           let compInput= Math.floor(Math.random()*3);
           if (compInput ==2) {
            computerSelection='SCISSORS'
         } else if (compInput ==1) {
            computerSelection='PAPER'
         } else {computerSelection="ROCK"}
           return(computerSelection);
         }
         

