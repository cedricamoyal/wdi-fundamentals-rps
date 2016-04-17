

var getInput = function() {
   console.log("Shuffle up and deal!!");
   var answer = prompt("Let's play: 'rock', 'paper' or 'scissors'");
   return answer;
};

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

var playerMove = function(move) {
  
    return move || getInput();
};

var computerMove = function(move) {
    
    return move || randomPlay();
};


var winner;

var getWinner = function(playerMove, computerMove) {

   

        if (playerMove == computerMove) {
    winner = "tie";
}
    else if (playerMove == "rock" && computerMove == "scissors") {
    winner = "player";
}
    else if (playerMove == "rock" && computerMove == "paper") {
    winner = "computer";
}
    else if (playerMove == "scissors" && computerMove == "rock") {
    winner = "computer";
}
    else if (playerMove == "scissors" && computerMove == "paper") {
    winner = "player";
}
    else if (playerMove == "paper" && computerMove == "scissors") {
    winner = "computer";
}
    else if (playerMove == "paper" && computerMove == "rock") {
    winner = "player";
}
    console.log("Player chose " + playerMove + " while computer chose " + computerMove + ". " + "AND thhhhhhe winner is " + winner);
    return winner;
};

var playToFive = function() {
  console.log('Play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;

  

    while (playerWins < 5 && computerWins < 5) {
        getWinner(playerMove(),computerMove());
        if (winner == "player") {
            playerWins += 1;
        }
        else if (winner == "computer") {
            computerWins += 1;
        }
        else {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        
        
        console.log("The score is currently " + playerWins + " for the player and " + computerWins + " for the computer");
    }


    return [playerWins, computerWins];
};

playToFive();









