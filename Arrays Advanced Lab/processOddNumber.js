function oddPosition(arr){
    let oddDouble = [];
for(let i = 0; i < arr.length; i++){
    if(i % 2 !== 0){
        oddDouble.push(arr[i]*2);
    }

}
oddDouble.reverse();
console.log(oddDouble.join(' '));
}
oddPosition([10, 15, 20, 25]);