function solve(num, type, day){
    let price = 0;
    let totalPrice = 0;
    
if(day === "Friday"){
    if(type === "Students"){
        price = 8.45;
    }
    if(type === "Business"){
        price = 10.90;
    }
    if(type === "Regular"){
        price = 15;
    }
}

if(day === "Saturday"){
    if(type === "Students"){
        price = 9.80;
    }
    if(type === "Business"){
        price = 15.60;
    }
    if(type === "Regular"){
        price = 20;
    }
}

if(day === "Sunday"){
    if(type === "Students"){
        price = 10.46;
    }
    if(type === "Business"){
        price = 16;
    }
    if(type === "Regular"){
        price = 22.50;
    }
}
totalPrice = price*num;
if(num>=30 && type === "Students"){
    totalPrice -= totalPrice*0.15;

}
if(num>=100 && type === "Business"){
    totalPrice -= 10*price;
}
if(num>=10 && num<=20 && type === "Regular"){
    totalPrice -= totalPrice*0.05;
}
console.log("Total price: " + totalPrice.toFixed(2));
}
solve(40, "Regular", "Saturday");