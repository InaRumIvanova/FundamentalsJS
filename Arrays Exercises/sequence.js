function sequence(array){
    //обхождаме масива
    //проверяваме за всеки елемент дали има еднаква последователност
    //и дали тази последователност е най-дългата
    //запазваме я и я принтираме
    let result = [];
    for(let i = 0; i<array.length; i++){
        let currentSeq = [array[i]];
        for(let j = i+1; j<array.length; j++){
            if(array[i]===array[j]){
                currentSeq.push(array[j]);
            }else{
                break;
            }
        }
        if(result.length < currentSeq.length){
            result = currentSeq;
        }
    }
    console.log(result.join(' '));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);