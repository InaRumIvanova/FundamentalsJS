function firstAndLastK(arr){
    let first = arr.shift();
    console.log(arr.slice(0,first).join(' '));
    console.log(arr.slice(arr.length-first,
        arr.length).join(' '));
}
firstAndLastK([2, 
    7, 8, 9]);