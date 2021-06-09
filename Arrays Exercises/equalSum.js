function solve(array){
    //обхождаме всеки един елемент на масива
    //намираме левия и десния сбор и ги сравняваме
    //ако i == 0 или i е последният индекс -> сборът е 0
    //принтираме индекса или не
   
    let isIndex = false;
    for(let i = 0; i<array.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        const element = array[i];

        if(i !== 0){
            for(let j = 0; j<i; j++){
                leftSum += array[j];
            }

        }
    
    if(i!==array.length-1){
        for(let r = i+1; r<array.length; r++){
            rightSum += array[r];
        }
    }
    if(leftSum === rightSum){
        isIndex = true;
        console.log(i);
    }
}
    if(!isIndex){
        console.log("no");
    }
    
}
solve([1,2,3,3]);