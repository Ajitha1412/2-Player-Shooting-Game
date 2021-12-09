var player1Health=100;
var player2Health=100;

let countRound=0;

let player1Score=0;
let player2Score=0;

//Executing onclick function for shooting
function shootBtn(){
    var player1Fires=Math.floor(Math.random()*5);
    var player2Fires=Math.floor(Math.random()*5);

    console.log("Player1 Fire:" +player1Fires);
    console.log("player2 Fire:" +player2Fires);

    document.getElementById("p1FireScore").innerHTML=player1Fires;
    document.getElementById('p2FireScore').innerHTML=player2Fires;

    //calculating health after initial round
    player1Health=player1Health-player1Fires;
    player2Health=player2Health-player2Fires;
    console.log("player1 Health:" + player1Health);
    console.log("player2 Health:" + player2Health);
    countRound++;
    console.log(countRound);

    //if player health reaches 0
    if (player1Health == 0) {
        document.getElementById("grid-item-9").innerHTML = "Player 2 Won!";
      }
      if (player2Health == 0) {
        document.getElementById("grid-item-9").innerHTML = "Player 1 Won!";
      }

      //stopping shoot Button after 5 rounds
      if (countRound == 5) {
        document.getElementById("shootBtn").disabled = true;
        document.getElementById("shootBtn").innerHTML = "Game Over";
        document.getElementById("shootBtn").style.backgroundColor = "grey";
      }

      //Finding the Winner of individual rounds and incrementing their score by 1
      if (player1Fires > player2Fires) {
      player1Score = player1Score + 1;
      }

      if (player2Fires > player1Fires) {
      player2Score = player2Score + 1;
      }
    console.log("Player 1 Win :" + player1Score);
    console.log("Player 2 Win :" + player2Score);
    document.getElementById("grid-item-4").innerHTML = player1Score;
    document.getElementById("grid-item-8").innerHTML = player2Score;

    //Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
  if (player1Score == 3) {
    gameOver("Player 1 Won!");
  }

  if (player2Score == 3) {
    gameOver("Player 2 Won!");
  }
   
  //Checking which player has scored more after completing 5 rounds
  if (countRound == 5) {
    if (player1Score > player2Score) {
      gameOver("Player 1 Won!");
    }

    if (player2Score > player1Score) {
      gameOver("Player 2 Won!");
    }
    //Checking if both the players have scored equally, if yes then printing DRAW
     
    if (player2Score == player1Score) {
        gameOver("Match Draw");
      }
   
}
     

     
function gameOver(playercomment) {
    document.getElementById("grid-item-9").innerHTML = playercomment;
    document.getElementById("shootBtn").disabled = true;
    document.getElementById("shootBtn").innerHTML = "Game Over";
    document.getElementById("shootBtn").style.backgroundColor = "grey";
  }
}
  //Reset Button Function / Reload of location page
  
  function reset() {
    //location.reload();
    history.go(0);
  }
  