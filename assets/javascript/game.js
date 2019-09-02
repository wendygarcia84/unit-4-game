// Create 4 characters with the following properties: name, health points, attack power, base attack power, counter attack power, and function property reduce HP

// Display all 4 characters in a white bg
  //ask the user to make a choice

$(document).ready(function() {
  //HTML ELEMENTS
  var enemiesVar;
  var opponentVar;
  var deathsHolder;
  var deadOpponent;
  var status = $(".status");
  
  //GAME VALUES
  var playerHP;
  var playerBP;
  var playerAP;

  var opponentHP;
  var counterAttackPower;

  // VERIFIERS AND COUNT DOWNS
  var playerChosen = false;
  var opponentChosen = false;

  var deathsCountdown = 3;

  
  $( ".player" ).on("click", function () {
  
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

    } else if (playerChosen && !opponentChosen) { 
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
    if (deathsCountdown <= 0 || playerHP <= 0) {
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
          deadOpponent = $(".opponent").detach(); //try +=
          if (deathsCountdown <= 0) {
            $(".status").text("YOU WON!! Restet the game");
            return;
          }
          // deathsHolder.append(deadOpponent);
          $(".status").text("OPPONENT IS DEAD CHOOSE A NEW ONE");
          opponentChosen = false;
        } else if (playerHP <=0) {
          $(".status").text("You're DEAD!! RESET THE GAME")
          return;
        }
    }
  
  });

});

