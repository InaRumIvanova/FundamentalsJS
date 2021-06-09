function uniquePair(arr,n){
    let arrPairs = [];

    for(let i = 0; i < arr.length; i++){
        let rigthSum = 0;
        for(let j = i+1; j < arr.length; j++){
            rigthSum = arr[i] + arr[j];
            if(rigthSum === n){
                arrPairs.push(arr[i]+' '+arr[j]);
                arrPairs.push('\n');
            }
        }
    }
    console.log(arrPairs.join(''));
}
//uniquePair([1, 7, 6, 2, 19, 23],8);
    uniquePair([14, 20, 60, 13, 7, 19, 8],
        27
        );