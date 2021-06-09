function solve(arr){
    let first = arr.shift().split(' ');

    //first = arr.shift();
for(let i = 0; i < arr.length; i++){
    //first = first.split(' ');
   for(let j = 0; j < first.length; j++){

let [partOne, partTwo] = arr.shift().split(' ');
if(partOne === "Play!"){
    break;
}
if(partOne === "Install"){
   first.push(partTwo);
}


 if(partOne === "Uninstall"){
     if(partTwo === first[j]){
        first.splice(j,1);
     }
}

if(partOne === "Update"){
    if(first.includes(partTwo)){
        first.splice(1,1);
        first.push(partTwo);

    }

}
 if(partOne === "Expansion"){
     //разделяме partTwo на две части
    let originalGame = first[0];
//ако first не съдържа partTwo, тогава трябва да се изпълни условието
if(!first.includes(partTwo)){

    let expansionGame = partTwo.split('-')[0] + ':' + partTwo.split('-')[1];
    let gameIndex = first.indexOf(originalGame);
    first.splice(gameIndex + 1, 0, expansionGame);
   
}
}
}
}
console.log(first.join(' '));
}

solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);