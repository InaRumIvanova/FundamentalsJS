function carWash(input){
let sumTotal = 0;
for(let i = 0; i<input.length; i++){
if(input[i] === "soap"){
    sumTotal+=10;
} if(input[i] === "water"){
sumTotal += sumTotal*0.20;
} if(input[i]==="vacuum cleaner"){
    sumTotal += sumTotal*0.25;
} if(input[i] === "mud"){
    sumTotal -= sumTotal*0.10;
}
}
console.log("The car is "+sumTotal.toFixed(2)+"% clean.");
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);