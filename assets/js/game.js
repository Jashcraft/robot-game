//player variables 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 1999;
var playerAttack = 25;
var playerMoney = 10;

//enemy variables
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto","Amy Android","Robo Trumble"]


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

  
var endGame = function(){
  // if player is still alive, player Wins! 
  if (playerHealth > 0) {
  window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
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

var shop = function() {
  // ask the player what they would like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7)  {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      //increase health and decrease money
      playerHealth = playerHealth +20;
      playerMoney = playerMoney -7;
      }

      else {
        window.alert("you don't have neough money! ... Fucker.")
      }
      break;
    
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 4) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      //increase attack / remove money 
      playerAttack = playerAttack +12;
      playerMoney = playerMoney -4;
      }
      else {
        window.alert("You don't have enough money! ...Fucker");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the Store!");
      // does nothing ending the funciton 
      default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    
  }
}



  // function to start a new game
  var startGame = function() {
    //reset player stats
    playerHealth = 250;
    playerAttack = 25;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0 ){
        window.alert("Welcome To Robot Gladiators! Round " + ( i + 1 ) );
        
        // pick new enemy to fight based on the index of enemy names array
        var pickedEnemyName = enemyNames[i];

        // reset health before starting new fight 
        enemyHealth = 50;

        //use debugger to pause script from running and check whats going on 
        //debugger;

        //pass picked enemy na,e variables value into the fight function 
        fight(pickedEnemyName);

        // if we're not fighting the last enemy
        if (playerHealth > 0 && i < enemyNames.length -1 ) {
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          if (storeConfirm) {
            shop();
          }
        }
    }

    else {
        window.alert( "You have lost your robot in battle! Game Over!");
        break;
    }
  }

  // play again
  endGame();
};

startGame();
