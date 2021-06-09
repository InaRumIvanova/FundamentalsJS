function myFunction(arr){
    let health = 100;
    let coins = 0;
   let dungeon = arr[0].split('|');
    let counterRooms = 0;
    for(let i = 0; i < dungeon.length;i++){
       let res = dungeon[i].split(' ');

        let [command,num] = dungeon[i].split(' ');
         num = Number(num);
        counterRooms++;
 
    if(command === "potion"){
        if(health+num > 100){
            num = 100-health;
            
        }else{
            health+=num;
        }
        console.log("You healed for "+num+" hp.");
        console.log("Current health: "+health+" hp.");
    }    
     if(command==="chest"){
        coins+=Number(num);

        console.log("You found "+coins+" coins.");
    }else{
        health -= Number(num);
        if(health>0){
            console.log(`You slayed ${command}.`);
            
        }else{
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${counterRooms}`);
          
          return;
        
        }
    }
}
    

        
}
myFunction(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);