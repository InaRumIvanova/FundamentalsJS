function solve(arr1,arr2){
    let arrModified = [];
    let arr = 0;
    
    for(let i = 0; i<arr1.length; i++){
     
        for(let el of arr1){
            if(i%2 === 0){
                arr1[i] = Number(arr1[i]);
                arr2[i] = Number(arr2[i]);
     
                (arrModified[i]) = (arr1[i]+arr2[i]);
            }else{
                arrModified[i] = arr1[i]+arr2[i] ;
            }
        }
        arr = arrModified.join(" - ");

    }
    console.log(arr);

}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);