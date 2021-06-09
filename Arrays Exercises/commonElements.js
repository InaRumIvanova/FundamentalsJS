function commonElements(firstArr, secondArr){
//обхождаме единия масив
//за всеки елемент проверяваме дали се съдържа във втория масив
//ако да -> принтираме
for(const el of firstArr){
    for(const secondEl of secondArr){
        if(el === secondEl){
            console.log(el);
            break;
        }
    }
}
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);