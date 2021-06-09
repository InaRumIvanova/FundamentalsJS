function max(arr){
    let arr2 = [];
    let maxNum =0 ;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
        if(arr[i]<=arr[j]){ 
            break;
    }else{
        arr2.push(arr[i]);


    }

    }

}
    //arr2.push(maxNum);
    
    console.log(arr2.join(' '));
}
max([14, 24, 3, 19, 15, 17]);
max([27, 19, 42, 2, 13, 45, 48]);