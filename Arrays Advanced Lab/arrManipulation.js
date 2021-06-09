function solve(arr){
let firstArr = (arr.shift().split(' '));
for(let i = 0; i < arr.length; i++){
    let [command, num] = arr.shift().split(' ');
     
    if(command === "Add"){
        firstArr.push(num);
    }
    for(let j = 0; j < firstArr.length; j++){

     if(command === "Remove"){
            if(num === firstArr[j]){
            firstArr.splice(j,1);
            }
        }
       if((num === j) && (command === "RemoveAt")){
            
            firstArr.splice(j,1);
        
    }
 }
}
console.log(firstArr.join(' '));
}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);