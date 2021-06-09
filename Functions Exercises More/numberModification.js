function solve(input) {
    let modified = [];
    modified = input.toString().split('');
    let sum = 0;
    let count = 0;
    let average = 0;
    let result = '';
    for (let i = 0; i <= modified.length; i++) {
        sum += Number(modified[i]);
        count++;
        average = sum / count;
        result+='9';
        
    }
        
        if (average > 5) {
            console.log(input);
        } else {
        console.log(modified+""+result);
    
}
    console.log(modified);
}
solve(101);
solve(5823);