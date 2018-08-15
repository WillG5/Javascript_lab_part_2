"use strict";
{//beginning of use strict statement
let player1;
let userHealth = 40;
let grantHealth = 10;
let wins = 0;

 
function startGame(){
  let playerAns = prompt("Would you like to play");
  if(playerAns === "yes"){
    player1 = prompt("What is your name");
    }else if(playerAns === "no"){
      return;
    }else{
      return;
    }
   let answer = playerAns;
    return player1;
}



function startCombat(grantHealth, player1, wins, userHealth){
  
  while(wins < 3 && userHealth > 0){
  userHealth -= getDamage();
  grantHealth -= getDamage();
  console.log(`${player1} has ${userHealth} health. Grant has ${grantHealth} health`);
  if(grantHealth <= 0){
    let attack = prompt("Attack or Quit");
    if(attack === "attack"){
    grantHealth = 10;
    wins++;
    }else{
      wins++;
      if(userHealth <= 0){
        wins++;
    console.log(`Grant has ${wins} wins`);
  }else{
    console.log(`${player1} has ${wins} wins`);
    }
      return;
    }
  }
} 
  if(userHealth <= 0){
    console.log(`Grant has ${wins} wins`);
  }else{
    console.log(`${player1} has ${wins} wins`);
}
     
  //  return startCombat;
} 

  
  
function getDamage(grantHealth, player1, wins, userHealth){
  
 return Math.floor(Math.random() * 5) + 1;
}



startGame();
startCombat(grantHealth, player1, wins, userHealth);



}//end of use strict statement