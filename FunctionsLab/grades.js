function grade(input){
    let result = Number(input).toFixed(2);
    if(result<3){
        console.log('Fail (2)');
    }else if(result>=3.00 && result<3.50){
        console.log(`Poor (${result})`);
    }else if(result>=3.50 && result<4.50){
        console.log(`Good (${result})`);
    }else if(result>=4.50 && result<5.50){
        console.log(`Very good (${result})`);
    }else if(result>=5.50 && result<=6.00){
        console.log(`Excellent (${result})`);
    }
}
grade(4.50);