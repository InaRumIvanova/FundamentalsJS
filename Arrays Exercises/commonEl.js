function commonEl(arr1,arr2){
for(let i = 0; i<=arr1.length-1; i++){

for(let el of arr2){
if(arr1[i] === el){
    console.log(el);
}
}
}

}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);