function ladyBug(arr){
    let firstNum = arr.shift();
    let secondNum = arr.shift();
    
    let arrModified = [];
for(let i = 0; i < arr.length; i++){
    let result = arr[i].split(' ');
    let [positionOne, command, positionTwo] = result;
    positionOne = Number(positionOne);
    positionTwo = Number(positionTwo);
    if(command === "right"){
        
    }

}
secondNum = secondNum.split(' ');

for(let j = 0; j < secondNum.length; j++){
    arrModified.push(1);
}
console.log(arrModified.join(' '));
console.log(secondNum);
}
ladyBug([ 3, '0 1',
'0 right 1',
'2 right 1' ]);