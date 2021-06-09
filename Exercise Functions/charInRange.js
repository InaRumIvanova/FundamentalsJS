function charInRange(a,b){
    let code = a.charCodeAt(0);
    let codeTwo = b.charCodeAt(0);

    let start = code < codeTwo ? code : codeTwo;
    let end = code > codeTwo ? code : codeTwo;
    let line = '';

    for(let i = start+1; i<end; i++ ){
        line += String.fromCharCode(i)+' ';
    }

    return line;
}
console.log(charInRange('a','d'));