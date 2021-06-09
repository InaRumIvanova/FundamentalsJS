function solve(arr){
    let modified = [];
for(let i = 0; i <= arr.length; i++){
    if(arr[i] === "add"){
        modified.push(i+1);

    }
    if(arr[i] === "remove"){
        modified.pop();
    }
}
if( modified.length===0){
    console.log("Empty");
}else{

console.log(modified.join(' '));
}
}
//solve(['add', 'add', 'remove', 'add', 'add']);
//solve(['add', 'add', 'add']);
solve(['remove', 'remove', 'remove']);