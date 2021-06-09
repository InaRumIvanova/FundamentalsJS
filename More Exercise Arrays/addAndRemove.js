function solve(arr){
    let modified = [];
    for(let i = 0; i <= arr.length; i++){

    if(arr[i] === "remove"){
        modified.pop(); 
    }

if(arr[i] === "add"){
    modified.push(i+1); // modified += (i+1);
}
}
if(modified.length === 0){
    console.log("Empty");
}else{
console.log(modified.join(' '));
}
}
solve(['add', 'add', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
solve(['add', 'add', 'remove', 'add', 'add']);