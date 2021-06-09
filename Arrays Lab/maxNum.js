function solve(arr){
    let sequence = [];
    let max = Number.MIN_SAFE_INTEGER;
    let last = arr[arr.length-1];

for(let i = 0; i < arr.length;i++){  
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]>arr[i+1]){
        sequence += arr[i] + " ";

    }if(arr[i] === last){
        sequence += last;

    }
    if(max === last){
        sequence = max;
        break;
    }  
}
console.log(last);
console.log(sequence);

}
solve([14, 24, 3, 19, 15, 17]);
solve([1, 4, 3, 2]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);