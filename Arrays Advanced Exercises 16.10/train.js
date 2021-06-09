function train(input){
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacityOfWagons = input.shift();
 
    while(input.length > 0){
        let command = input.shift().split(' ');
 
        if(command.length == 1){
            command = Number(command);
            wagons = addPassengrs(wagons, command);
        }
 
        if(command.length > 1){
            let numberForAdd = Number(command[1]);
            wagons.push(numberForAdd);
 
        }
    }
 
    console.log(wagons.join(" "));
 
    function addPassengrs(arr, numOfPassemgers){
        for(let i = 0; i < arr.length; i++){
            let curWagonSize = maxCapacityOfWagons - arr[i];
            if(numOfPassemgers <= curWagonSize){
                arr[i] += numOfPassemgers;
                break;
            }
        }
        return arr;
    }
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);