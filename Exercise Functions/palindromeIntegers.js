function palindrome(arr) {
    //обхождаме числата едно по едно
    //всяка едно число проверяваме дали е полиндром
    //ако е, тогава принтираме true или false
    let result = '';

    for (let num of arr) {
        let isPolindrome = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        for (let i = 0; i <= mid; i++) {
            let lastIndex = num.length - 1;
            if (num[i] !== num[lastIndex - i]) {
                isPolindrome = 'false';
                break;
            }
        }
        result += isPolindrome + '\n';
    }
    return result;
}
console.log(palindrome([123, 323, 421, 121]));