// Create 4 characters with the following properties: name, health points, attack power, base attack power, counter attack power, and function property reduce HP

// Display all 4 characters in a white bg
  //ask the user to make a choice

$(document).ready(function() {
  var enemiesVar;
  var opponentVar;
  var deadOpponent;
  var deathsHolder;
  
  var playerHP;
  var playerBP;
  var playerAP;

  var opponentHP;
  var counterAttackPower;

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
      console.log(`opponent HP ${opponentHP}, CAP ${counterAttackPower}`);

    }
  });

          // Enable attack button

  // ----------- ATTACK BUTTON ------------- //
  $( ".fight" ).on("click", function () {
    if (deathsCountdown <= 0 || playerHP <= 0) {
      console.log("DEAD PEOPLE CAN'T FIGHT, RESTART THE GAME");
      return;
    } else if (!playerChosen || !opponentChosen) {
      console.log("CHOOSE YOUR CHARACTER AND OPPONENT FIRST");
      return;
    } else if (playerChosen && opponentChosen) {
  
        console.log(`Player attacked with ${playerAP} attack power`);
        opponentHP -= playerAP;
        console.log(`Opponent new HP is ${opponentHP}`);
        playerAP += playerBP;
        playerHP -= counterAttackPower;
        console.log(`opponent attacked with ${counterAttackPower} CAP`);
        console.log(`Player's new HP is ${playerHP}`);

        if (opponentHP <= 0) {
          deathsCountdown --;
          deadOpponent = $(".opponent").detach(); //try +=
          if (deathsCountdown <= 0) {
            console.log("YOU WON!! Restet the game");
            return;
          }
          // deathsHolder.append(deadOpponent);
          console.log(deathsHolder + "OPPONENT IS DEAD CHOOSE A NEW ONE");
          opponentChosen = false;
        } else if (playerHP <=0) {
          console.log("You're dead!! RESET THE GAME")
          return;
        }
    }
  
  });

  // Check if player and oponent are chosen, otherwise do nothing
  // Oponent loses oponentHP according to player's current attackPower
  // Player gains attackPower by adding basePower to it
  // ----Couter Attack ---//
  // Player loses playerHP according to enemie's counterAttackPower
  // Check if playerHP >= 0 you lose! restart all the game
    // if oponent >= 0, 
      // Hide oponent, 
      // oponenChoosen = false, player choses oponent (chooseOponent)

});

