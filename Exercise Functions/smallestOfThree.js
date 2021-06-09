function smallestOfThree(x, y, z){
    let smallestNum = Number.MAX_SAFE_INTEGER;
    smallestNum = smaller(x, smallestNum);
    smallestNum = smaller(y, smallestNum);
    smallestNum = smaller(z, smallestNum);


        function smaller(n, small){
        if( n < small){
            small = n;
        }
        return small;
    }
    return smallestNum;
}
console.log(smallestOfThree(2,5,3));