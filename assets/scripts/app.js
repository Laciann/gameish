const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(chosenMaxLife) {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if(currentMonsterHealth<=0){
        alert('You won');
    } else if(currentPlayerHealth<=0){
        alert('Monster won');
    }
}

attackBtn.addEventListener('click', attackHandler);