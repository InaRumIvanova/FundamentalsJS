function positiveOrNegative(arr){
let modifiedArrPositive = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i]<0){
    modifiedArrPositive.unshift(arr[i]);
}
}
for(let i = 0; i < arr.length; i++){
    if(arr[i]>=0){
    modifiedArrPositive.push(arr[i]);

}

}
console.log(modifiedArrPositive.join('\n'));
}
positiveOrNegative([7, -2, 8, 9]);
positiveOrNegative([3, -2, 0, -1]);