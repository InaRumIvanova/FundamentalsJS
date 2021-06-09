function solve(arr1,arr2){

for(let i = 0; i<arr1.length; i++){
        arr1[i] = Number(arr1[i]);
}
        for(let i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i]);
        }

        let sum = 0;
        let equal = false;
        
        for(let i = 0; i< arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            equal = true;
            console.log(i);
        }
        sum+=arr1[i];
    
        }
        if(equal !== true){
    console.log(sum);
        }
}
solve([1,2,3,4],[1,2,3,4]);