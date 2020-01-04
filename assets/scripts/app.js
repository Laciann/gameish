const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const enteredValue = prompt('Enter the maximum life value','100')

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <=0 ){
  chosenMaxLife = 0;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function reset() {
  let currentMonsterHealth = chosenMaxLife;
  let currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}
adjustHealthBars(chosenMaxLife);

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw");
  }

  if(currentPlayerHealth<=0 || currentMonsterHealth<=0){
    reset();
  }
}

function attackMonster(mode) {
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode == "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler(chosenMaxLife) {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You cannot heal above maximum health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
