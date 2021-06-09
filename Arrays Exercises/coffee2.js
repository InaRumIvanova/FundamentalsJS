function solve(input) {
    const orders = input.shift();
    let totalPrice = 0;
    
    for (let i = 0; i < orders; i++) {
        const price = input.shift();
        const days = input.shift();
        const count = input.shift();
        const total = price * days * count;
        totalPrice += total;
        console.log(`The price for the coffee is: $${total.toFixed(2)}`);
    }
 
    console.log(`Total: $${totalPrice.toFixed(2)}`);
}
solve([1, 1.53, 30, 8]);
