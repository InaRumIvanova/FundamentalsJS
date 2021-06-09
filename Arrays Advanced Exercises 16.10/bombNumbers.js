function bombDetonation(arr1,arr2){
    
let specialBombNum = arr2.shift();
let powerBomb = arr2.shift();

for(let i = 0; i < arr1.length; i++){

   if(arr1.includes(specialBombNum)){
       
        let indexSpecial = arr1.indexOf(specialBombNum);
    
        for(let i = indexSpecial-1; i>=powerBomb;i--){
            arr1.splice(i,1);
            
        }
        
        for(let i = powerBomb-1; i<=indexSpecial; i++){
            arr1.splice(i,1);
            
        }
        
        arr1.splice(specialBombNum);

            
    }
    
}
let reducer = (a,b) => a+b;
console.log(arr1.reduce(reducer));
}
bombDetonation([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );
bombDetonation([1, 7, 7, 1, 2, 3],
    [7, 1]
    );
bombDetonation([1, 2, 2, 4, 2, 2, 2, 9],
   [4, 2]
   );
    bombDetonation([1, 4, 4, 2, 8, 9, 1],
        [9, 3]
        );