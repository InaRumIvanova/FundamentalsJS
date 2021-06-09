function arrayRotation(arr, n){
    for(let i = 0; i < n; i++){
        const el = arr.shift();
        arr.push(el);

    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);