function solve(arr,n){
for(let i = 0; i<n; i++){
arr.push(arr[0]);
arr.shift(arr[0]);
}
let arrModified = [];

for(let i = 0; i<arr.length; i++){
    arrModified += arr[i] + " ";

}

console.log(arrModified);

}
solve([51, 47, 32, 61, 21], 2);