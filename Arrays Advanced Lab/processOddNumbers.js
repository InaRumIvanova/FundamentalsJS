function oddNumbers(arr){
//let filteredOddNum = arr.filter([x] => x%2!==0).map(x => x*2).reverse().join(' ');

let filtered = arr.filter(isOddIndex)
.map(x => x*2)
.reverse()
.join(' ');
console.log(filtered);


function isOddIndex(value, index){
return (index % 2) == 1;
}

}
oddNumbers([10, 15, 20, 25]);