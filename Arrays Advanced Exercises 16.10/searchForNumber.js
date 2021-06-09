function searchNumber(arr1,arr2){

let line = arr2.shift();
let deletedElements = arr2.shift();
let elArr2 = Number(arr2.shift());

let arrModified = arr1.splice(0,line).map(Number);
let arrModifiedTwo = arrModified.splice(0,deletedElements);
let finalArr = [];
let count = 0;
for(let i = 0; i < arrModified.length; i++){
    
    if(arrModified[i] === elArr2){
        finalArr.push(elArr2);
        
    }
    
}
console.log("Number "+elArr2+" occurs "+finalArr.length+ " times.");

console.log(arrModified);
console.log(arrModifiedTwo);
//console.log(arr1);
}
searchNumber([5, 2, 3, 3, 1, 6],
    [6, 2, 3]);