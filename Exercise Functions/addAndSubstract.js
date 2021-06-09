function addAndSubstract(x, y, z){
    function sum(a, b){
        return a+b;
    }

    let result = sum(x,y);
    return result - z;
}
//let final = addAndSubstract(23, 6,10);
//console.log(final);
console.log(addAndSubstract(23, 6,10));
