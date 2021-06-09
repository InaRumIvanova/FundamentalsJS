function coffee(input) {
    let numOrders = Number(input[0]);

    let index = 1;
    let sum = 0;
    let total = 0;
    while (index < input.length) {

        let currenPrice = Number(input[index]);
        let currentDays = Number(input[index + 1]);
        let currentCount = Number(input[index + 2]);

        sum = currenPrice * currentCount * currentDays;
        total += sum;
        if (input.length <= 4) {
            console.log(`The price for the coffee is: $${sum.toFixed(2)}`);
            break;
        }

        index += 3;

        console.log(`The price for the coffee is: $${sum.toFixed(2)}`);

    }
    console.log(`Total: $${total.toFixed(2)}`);
}
coffee([1, 1.53, 30, 8]);
coffee([2, 4.99, 31, 3, 0.35, 31, 5]);


