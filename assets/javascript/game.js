// Create 4 characters with the following properties: name, health points, attack power, base attack power, counter attack power, and function property reduce HP

// Display all 4 characters in a white bg
  //ask the user to make a choice

$(document).ready(function() {
  var enemiesVar;
  var oponentVar;

  
  var playerHP;
  var playerBP;
  var playerAP;

  var oponentHP;
  var counterAttackPower;

  var playerChosen = false;
  var oponentChosen = false;

  
  $( ".player" ).on("click", function () {
    if (!playerChosen) { 

    // User chooses a character, and it becomes "player"
  // Create variables playerChosen = true; playerHP, attackPower, basePower and assign them to the current player's values
    playerHP = $(this).attr("health-points");
    playerBP = $(this).attr("base-power");
    playerAP = playerBP;

    //-----------SANITY CHECK ---------------///
    console.log(`HP: ${playerHP}, BP ${playerBP}, AP ${playerAP}`);

    //remove element from area, keeping its value in a variable
    enemiesVar = $(this).siblings().not("h3").detach();

    // The rest of the characters become "enemies"
    $(enemiesVar).addClass("enemies");

    //Display 3 enemies on an area bellow, in a red background each
    $(".enemies-section").append(enemiesVar);
    playerChosen = true;

    } else if (playerChosen && !oponentChosen) { 
      //create oponent
      oponentHP = $(this).attr("health-points");
      counterAttackPower = $(this).attr("counter-attack-power");

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

