function loadingBar(n){
    let result = [];
    let points = '';
    let count = 0;
    for(let i = 1; i <= n; i+=10){
        result += "%";
        points = ".";
        count ++;
    }
    if(n !== 100){
console.log(n+"% "+"["+result+""+points.repeat(10-count)+"]");
console.log("Still loading...");
    }else{
        console.log("100% Complete!");
        console.log("["+result.repeat(1)+"]");
    }
}
loadingBar(50);