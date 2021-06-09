function sumFirstAndLast(arr){
let firstEl = Number(arr[0]);

firstEl += Number(arr[arr.length-1]);

console.log(firstEl);
}
sumFirstAndLast(['20', '30', '40']);