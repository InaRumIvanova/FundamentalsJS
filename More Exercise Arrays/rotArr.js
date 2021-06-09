function solve(arr){
let last = Number(arr[arr.length-1]);
arr.pop(last);
for(let i = 0; i<last; i++){
arr.unshift(arr[arr.length-1]);    
arr.pop();

}
console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);