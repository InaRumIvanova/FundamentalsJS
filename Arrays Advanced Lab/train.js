function train(arr){
let modified = arr.shift().split(' ').map(Number);
let maxValue = Number(arr.shift()); 
for(let i = 0; i < arr.length; i++){
    let [command, firstNum] = arr[i].split(' ');
    firstNum = Number(firstNum);
    switch (command){
        case "Add":
            modified.push(firstNum);
            break;   
    }
    let [secondNum] = arr[i].split(' ');
    secondNum = Number(secondNum);
    for(let j = 0; j < modified.length; j++){
        if((modified[j]+secondNum)<=maxValue){
            modified[j] += secondNum;
            break;
        }
    }
   }


    console.log(modified.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);