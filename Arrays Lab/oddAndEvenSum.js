function solve(arr){

    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i]);
    }
        let sumEven = 0;
        let sumOdd = 0;
    for(let num of arr){
        if(num % 2 === 0){
            sumEven+= num;
        }else{
            sumOdd += num;
        }
}
if(sumOdd !== 0 && sumEven !== 0){
console.log(Math.abs(sumEven-sumOdd));
}else{
console.log(sumEven-sumOdd);
}
}
solve([1,2,3,4,5,6]);