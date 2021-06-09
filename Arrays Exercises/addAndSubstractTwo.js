function addAndSub(arr){
    let sumEven = 0;
    let sumOdd = 0;
    let sum = 0;
    let modified = [];
for(let i = 0; i <= arr.length - 1;i++){
    if(arr[i] % 2 === 0){
        sum += arr[i];
        arr[i] += i;
        modified.push(arr[i]);
        sumEven += Number(arr[i]);
    }else{
        sum += arr[i];
        arr[i] -= i;
        modified.push(arr[i]);
        sumOdd += Number(arr[i]);
    }

}
console.log(modified);
console.log(sum);
console.log(sumEven+sumOdd);
}
addAndSub([5, 15, 23, 56, 35]);