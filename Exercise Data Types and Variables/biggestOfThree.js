function solve(input){
    let n = parseInt(input.shift([0]));
    let max = Number(input.shift());
    for(let i = 1; i<=n; i++){
        let currentNum = Number(input.shift([i]));
        if(currentNum>max){
            max=currentNum;
        }
    
    }
    console.log(Math.max(max));
}
solve(['3','-10','20','-30']);