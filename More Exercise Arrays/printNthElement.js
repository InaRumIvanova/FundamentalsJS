function printElement(arr) {
    let lastElement = Number(arr[arr.length-1]);
    let collected = [];
    for(let i = 0; i < arr.length-1; i+=lastElement){
           
            collected += arr[i]+" ";
        
        
    }
    console.log(collected);
}
printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']);