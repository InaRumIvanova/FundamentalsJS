function kNumbers(arr){
let first = Number(arr.shift());

console.log(arr.slice(0,first));
console.log(arr.slice(arr.length-first, arr.length));


}
kNumbers([2, 7, 8, 9]);