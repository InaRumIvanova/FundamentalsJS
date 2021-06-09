function solve(arrayOne, arrayTwo){
    //обхождане на първи масив
    //проверяваме всеки елемент и дали някой се съдържа във втория масив
    //ако да -> принтираме

    for (const el of arrayOne) {
        let isCommon = arrayTwo.includes(el);
        if(isCommon){
            console.log(el);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);

