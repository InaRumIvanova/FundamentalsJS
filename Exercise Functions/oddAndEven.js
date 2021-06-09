function oddAndEven(n) {
    //трансформираме от число в масив
    //обхождаме масива и проверяваме всяко число
    //дали е четно или нечетно
    //сумираме 

    let arr = String(n).split('');
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
console.log(oddAndEven(1000435));