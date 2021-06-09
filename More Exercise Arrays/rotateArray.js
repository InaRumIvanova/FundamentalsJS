function solve(arr){
let lastEl = arr[arr.length-1];
arr.pop();

for(let i = 0; i < lastEl; i++){

    arr.unshift(arr[arr.length-1]);
    arr.pop(arr[arr.length-1]);

}
console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['1', '2', '3', '4', '2']);
