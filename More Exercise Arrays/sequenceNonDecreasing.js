function solve(arr){
let modified = [];
let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        modified.push(max);

    }
}
console.log(modified.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1,2,3,4]);