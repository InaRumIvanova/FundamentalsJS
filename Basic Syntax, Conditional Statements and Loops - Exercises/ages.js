function solve(num){
// •	0-2 – baby; 
// •	3-13 – child; 
// •	14-19 – teenager;
// •	20-65 – adult;
// •	>=66 – elder; 
// •	In all other cases - out of bounds
let num1 = Number(num);
if(num1>=0 && num1 <= 2){
    console.log("baby");
}else if(num1>=3 && num1<=13){
    console.log("child");
}else if(num1 >= 14 && num1 <= 19){
    console.log("teenager");
}else if(num1 >= 20 && num1 <= 65){
    console.log("adult");
}else if(num1>=66){
    console.log("elder");
}else{
    console.log("out of bounds");
}

}
solve(['20']);