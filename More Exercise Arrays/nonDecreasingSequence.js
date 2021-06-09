function solve(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([ 20, 3, 2, 15, 6, 1]);

// Втори вид решение:
// function solve(arr) {
//     console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
// }