function factoriel(a,b){
    let result = 1;
    let resultSecond = 1;
    for(let i = 1; i<=a; i++){
        result *=i;
    }
    for(let j = 1; j <= b; j++){
        resultSecond *=j;
    }

    console.log((result/resultSecond).toFixed(2));
}
factoriel(6,2);