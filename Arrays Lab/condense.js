function condenseArr(arr){
    //цикълът се върти, докато дължината на масива стане един елемент
    while(arr.length>1){
        //създаваме масив със същата дължина като arr
        let sum = Array(arr.length-1);
        //създаваме цикъл, който се върти толкова пъти, колкото е до предпоследния елемент
for(let i = 0; i < arr.length-1; i++){
    
    sum[i] = Number(arr[i]+arr[i+1]);
}
arr = sum;

}
console.log(arr[0]);
}
condenseArr([2,10,3]);