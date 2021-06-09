function solve(args){
    let n = parseInt(args);
    let prime=true;
    if(args<2){
        prime=false;
    }

    for(let i=2;i<=Math.sqrt(Math.abs(n));i++){
        if(n%i===0){
            prime=false;
            break;
        }

    }
    if(prime&&n>2){
        console.log("true");
    }else{
        console.log("false");
    }
}
solve(['3']);