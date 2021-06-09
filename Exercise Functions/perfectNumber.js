function perfectNum(n){
    let perfect = 0;
for(let i = 1; i <n; i++){
    if(n % i === 0 ){
        perfect+=i;
    }

}
if(perfect === n){
    console.log("We have a perfect number!");
}else{
    console.log("It's not so perfect.");
}
}
perfectNum(28);