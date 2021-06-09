function train(arr){
let wagons = arr.shift().split(' ').map(Number);
let passengers = arr.shift().split(' ');
for(let i = 0; i < arr.length; i++){
    let [command, num] = arr[i].split(' ');
    num = Number(num);
    if(command === "Add"){
        wagons.push(num);
    }else{
        command = Number(command);
        wagons = addPassengrs(wagons, command);

    }
}
console.log(wagons.join(' '));



function addPassengrs(input,numOfPassemgers){
        for(let j = 0;j < input.length; j++){
            let currentPassengerNum = passengers - input[j];
            if(currentPassengerNum >= numOfPassemgers){
                input[j] += numOfPassemgers;
                break;
            }
        }
        return input;
    }
    
}
//console.log(passengers);

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);