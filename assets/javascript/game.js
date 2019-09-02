// Create 4 characters with the following properties: name, health points, attack power, base attack power, counter attack power, and function property reduce HP

// Display all 4 characters in a white bg
  //ask the user to make a choice

$(document).ready(function() {
  var enemiesVar;
  var oponentVar;
  var deadOpponent;
  var deathsHolder;

  
  var playerHP;
  var playerBP;
  var playerAP;

  var oponentHP;
  var counterAttackPower;

  var playerChosen = false;
  var oponentChosen = false;

  
  $( ".player" ).on("click", function () {
    if (!playerChosen && !oponentChosen) { 

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

    } else if (playerChosen && !oponentChosen) { 
      //create oponent
      oponentHP = parseInt($(this).attr("health-points"));
      counterAttackPower = parseInt($(this).attr("counter-attack-power"));

      //remove element from area, keeping its value in a variable
      oponentVar = $(this).detach();
      $(oponentVar).addClass("oponent");

      //Display oponent in "oponent section" in a red bgc
      $(".oponent-section").append(oponentVar);
      oponentChosen = true;
      console.log(`oponent HP ${oponentHP}, CAP ${counterAttackPower}`);

    }
  });

          // Enable attack button

  // ----------- ATTACK BUTTON ------------- //
  $( ".fight" ).on("click", function () {
    if (playerChosen && oponentChosen) {
  
        console.log(`Player attacked with ${playerAP} attack power`);
        oponentHP -= playerAP;
        console.log(`Oponent new HP is ${oponentHP}`);
        playerAP += playerBP;
        playerHP -= counterAttackPower;
        console.log(`oponent attacked with ${counterAttackPower} CAP`);
        console.log(`Player's new HP is ${playerHP}`);

        if (oponentHP <= 0 || playerHP <=0) {
          deadOpponent = $(".oponent").detach();
          // deathsHolder.append(deadOpponent);
          console.log(deathsHolder);
          alert('OPONENT 1 IS DEAD! CHOSE A NEW OPONENT!');
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

