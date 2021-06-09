function solve(args){
    let n = parseInt(args);
    let num=1;
    let result="";
    for(row=1;row<=n;row++){
        for(col=1;col<=row;col++){
            if(col>1){
                result+=" ";
            }
            result+=num;
            num++;
            if(num>n){
                break;
            }
        }
        console.log(result);
        result="";
        if(num>n){
            break;
        }
    }
}
solve(['5']);