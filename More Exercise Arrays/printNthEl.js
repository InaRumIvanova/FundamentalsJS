function printNelement(arr){
    let arrModified = [];
    let last = Number(arr[arr.length-1]);
for(let i = 0; i < arr.length-1; i+=last){
   arrModified.push(arr[i]);
    
}
console.log(arrModified.join(' '));

}
printNelement(['5', '20', '31', '4', '20', '2']);