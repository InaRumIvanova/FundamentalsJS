function solve(arr){
    let modifiedArr = arr.sort((a,b) => {
        return a-b;
    });
    console.log(modifiedArr.slice(0,2).join(' '));
}
solve([30, 15, 50, 5]);