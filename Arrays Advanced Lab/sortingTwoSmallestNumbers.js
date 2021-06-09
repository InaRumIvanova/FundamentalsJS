function smallestNum(arr){
    let nums = arr.sort((a,b) => a-b);

    console.log(nums.slice(0,2).join(' '));
}
smallestNum([30, 15, 50, 5]);