function solve(arr){
    
    let isIndex = false;
    for(let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rigthSum = 0;
        if(i!==0){
            for(let j = 0; j < i; j++){
                leftSum += arr[j];
            }
        }
        if(i!==arr.length-1){
            for(let r = i+1; r < arr.length; r++){
                rigthSum += arr[r];
            }
        }
        if(rigthSum === leftSum){
            isIndex = true;
            console.log(i);
        }
    }
    if(!isIndex){
        console.log('no');
    }
}
solve([1,2,3,3]);