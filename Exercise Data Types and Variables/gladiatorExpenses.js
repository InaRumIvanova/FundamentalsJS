function gladiator(lostFighths, helmet,sword, shield, armour){
    let expenses = 0;
    let shieldBrakes = 0;
for(let i = 1; i<=lostFighths; i++){
    if(i%2 == 0){
        expenses+= helmet;
    }
    if(i % 3 == 0){
        expenses+=sword;
    }
    if(i%2 == 0 && i%3 ==0){
        expenses += shield;
        shieldBrakes++;
        if(shieldBrakes === 2){
            expenses += armour;
            shieldBrakes = 0;
        }
    }
    
}
console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7,2,3,4,5);