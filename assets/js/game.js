var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
};

//player variables 
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 1999,
  attack: 25,
  munnie: 10,
  reset: function () {
    this.health = 250;
    this.attack = 25;
    this.munnie = 10;
  },
  resetHealth: function () {
    if (this.munnie >= 7) {
      this.health += 20;
      this.munnie -= 7;
    } else {
      window.alert("You don't have enough money!");
    }


  },
  resetAttack: function () {
    if (this.munnie >= 7) {
    this.attack += 15;
    this.munnie -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  }
}
//enemy variables

var enemyInfo = [
  {
    name: "Rob",
    attack: randomNumber(7, 11)
  },
  {
    name: "JenniferDumpedMe",
    attack: randomNumber(17, 20)
  },
  {
    name: "WallyDestroyerOfWorlds",
    attack: randomNumber(40, 88)
  }
];

var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.munnie = Math.max(0, playerInfo.munnie - 10);
        console.log("playerMoney", playerInfo.munnie)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.munnie = playerInfo.munnie + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    damage = randomNumber(enemyAttack - 3, enemyAttack)

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};



var endGame = function () {
  // if player is still alive, player Wins! 
  if (playerInfo.health > 0) {
    window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.munnie + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again 
  var playAgainConfirm = window.confirm("Would you like to play again");
  if (playAgainConfirm) {
    //RESTART THE GAME
    startGame();
  }
  else {
    window.alert("Thank You for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  // ask the player what they would like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.resetHealth()
      break;
    case "UPGRADE":
    case "upgrade":
playerInfo.resetAttack()
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the Store!");
      // does nothing ending the funciton 
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;

  }
}



// function to start a new game
var startGame = function () {
  //reset player stats
  playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome To Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of enemy names array
      var pickedEnemyObj = enemyInfo[i];

      // reset health before starting new fight 
      pickedEnemyObj.health = randomNumber(40, 60);

      //use debugger to pause script from running and check whats going on 
      //debugger;

      //pass picked enemy na,e variables value into the fight function 
      fight(pickedEnemyObj);

      // if we're not fighting the last enemy
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        }
      }
    }

    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // play again
  endGame();
};

startGame();
