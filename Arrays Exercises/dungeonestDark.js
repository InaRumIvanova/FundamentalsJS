function solve(arr) {
    let health = 100;
    let coins = 0;
    let arrModified = arr[0].split('|');
    let isMonster = false;
    let room = 0;
    for (let i = 0; i < arrModified.length; i++) {
        room++;

        let result = arrModified[i].split(' ');
        let [command, points] = result;
        points = Number(points);

        if (command === "potion") {
            if (health + points > 100) {
                points = 100 - health;
                health+=points;
            } else {
                health += points;
            }
            console.log("You healed for " + points + " hp.");
            console.log("Current health: " + health + " hp.");
        }
        if (command === "chest") {

            coins += points;
            console.log("You found " + points + " coins.");

        }
        if (command !== "chest" && command !== "potion") {
            isMonster = true;
            health -= points;

            if (isMonster) {
                if (health <= 0) {
                    console.log("You died! Killed by " + command + ".");
                    console.log("Best room: " + room);
                    break;
                } else {
                    console.log("You slayed " + command + ".");
                }
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log("Coins: " + coins);
        console.log("Health: " + health);
    }


}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
//solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);