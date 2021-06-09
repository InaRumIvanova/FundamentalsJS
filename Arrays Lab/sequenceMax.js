function solve(arr){
    //обхождаме масива
    //проверяваме за всеки елемент има ли редица след себе си и най-дългата ли е
    //запазваме я
    let result = [];
for(let i = 0; i < arr.length;i++){
    let currentSeq = [arr[i]];

for(let j = i+1; j < arr.length; j++){
    if(arr[i] === arr[j]){
        currentSeq.push(arr[j]);
    }else{
        break;
    }

}

if(result.length < currentSeq.length){
    result = currentSeq;
}
//console.log(currentSeq);

}
console.log(result.join(' '));
}
solve([1, 1, 1, 2, 3, 1, 3, 3]);