// Create 4 characters with the following properties: name, health points, attack power, base attack power, counter attack power, and function property reduce HP

// Display all 4 characters in a white bg
  //ask the user to make a choice

$(document).ready(function() {
  //HTML ELEMENTS
  var enemiesVar;
  var opponentVar;
  var deathsHolder;
  var deadOpponent;
  var charactersVar = $(".character");
  var resetButton = $("<button>").text("Reset Game!").addClass("reset");
  
  //GAME VALUES
  var playerHP;
  var playerBP;
  var playerAP;

  var opponentHP;
  var counterAttackPower;

  // VERIFIERS AND COUNT DOWNS
  var playerChosen = false;
  var opponentChosen = false;
  var gameOver = false;

  var deathsCountdown = 3;

  
  $("body").on("click", ".player", function () {
  
    if (!playerChosen && !opponentChosen) { 

    // User chooses a character, and it becomes "player"
  // Create variables playerChosen = true; playerHP, attackPower, basePower and assign them to the current player's values
    playerHP = parseInt($(this).attr("health-points"));
    playerBP = parseInt($(this).attr("base-power"));
    playerAP = playerBP;

    //remove element from area, keeping its value in a variable
    enemiesVar = $(this).siblings().not("h3").detach();
    enemiesVar.removeClass("player");

    // The rest of the characters become "enemies"
    $(enemiesVar).addClass("enemies");

    //Display 3 enemies on an area bellow, in a red background each
    $(".enemies-section").append(enemiesVar);
    playerChosen = true;
    }  
  });
  
  $("body").on("click", ".enemies", function () {
    if (playerChosen && !opponentChosen) { 
      //create opponent
      opponentHP = parseInt($(this).attr("health-points"));
      counterAttackPower = parseInt($(this).attr("counter-attack-power"));

      //remove element from area, keeping its value in a variable
      opponentVar = $(this).detach();
      $(opponentVar).addClass("opponent");

      //Display opponent in "opponent section" in a red bgc
      $(".opponent-section").append(opponentVar);
      opponentChosen = true;
    }
  });

          // Enable attack button

  // ----------- ATTACK BUTTON ------------- //
  $( ".fight" ).on("click", function () {
    if (gameOver) {
      $(".status").text("DEAD PEOPLE CAN'T FIGHT, RESTART THE GAME");
      return;
    } else if (!playerChosen || !opponentChosen) {
      $(".status").text("THERE IS NO DEFENDER!");
      return;
    } else if (playerChosen && opponentChosen) {
  
        opponentHP -= playerAP;
        console.log(`Opponent new HP is ${opponentHP}`);
        playerAP += playerBP;
        playerHP -= counterAttackPower;
        $(".status").text(`Player attacked with ${playerAP} attack power. Opponent attacked with ${counterAttackPower} Counter Attack Power.`);
        console.log(`Player's new HP is ${playerHP}`);

        if (opponentHP <= 0) {
          deathsCountdown --;
          deadOpponent = $(".opponent").remove();
          if (deathsCountdown <= 0) {
            gameOver = true;
            $(".status").text("YOU WON!! Restet the game");
            $(".fight-section").append(resetButton);
            return;
          }
          // deathsHolder.append(deadOpponent);
          $(".status").text("OPPONENT IS DEAD CHOOSE A NEW ONE");
          opponentChosen = false;
        } 
        if (playerHP <=0) {
          gameOver = true;
          $(".status").text("You're DEAD!! RESET THE GAME");
          $(".fight-section").append(resetButton);
          return;
        }
    }
  
  });

  // CHECK FOR BUGS 
  $("body").on("click", ".reset", function () {
    console.log("GAME HAS BEN RESET");
    $(".characters-section, .enemies-section, .opponent-section").empty();
    $(charactersVar).removeClass("enemies opponent").addClass("player");
    $(".reset").remove();
    $(".characters-section").append(charactersVar);

    playerChosen = false;
    opponentChosen = false;
    deathsCountdown = 3;
    gameOver = false;

  });
});

