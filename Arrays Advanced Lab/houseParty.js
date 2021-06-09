function houseParty(arr){
for(let i = 0; i < arr.length; i++){
    let modified = arr[i].split(' ');
    
    if(modified.includes("not")){
        modified.pop();
        modified.push("in the list!");
        console.log(modified.join(' '));
        let [command] = arr[0].split(' ');
        console.log(command);
        break;
    }else{
        //console.log(modified[0] + " is already in the list!");
        let [command] = arr[i].split(' ');
        console.log(command);
    }
    
}
}
// houseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']);

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);