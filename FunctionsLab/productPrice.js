function solve(product, quantity){
let coffeePrice = 1.50;
let waterPrice = 1.00;
let cokePrice = 1.40;
let snacksPrice = 2.00;

let price = 0;
if(product === "water"){
    price = waterPrice*quantity;
}else if(product === "coffee"){
    price = coffeePrice*quantity;
}else if(product === "coke"){
    price = cokePrice*quantity;
}else if(product === "snacks"){
    price = snacksPrice*quantity;
}
console.log(price.toFixed(2));
}
solve("water",1);