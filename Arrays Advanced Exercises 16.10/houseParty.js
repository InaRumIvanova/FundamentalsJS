function solve(arr) {
    let guestList = [];

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        let name = line[0];
        let command = line[2];
        if (command !== "not") {
            if (guestList.includes(name)) {
                console.log(name + " is already in the list!");
                continue;
            }
            guestList.push(name);
        } else {
            if (!guestList.includes(name)) {
                console.log(name + " is not in the list!");
                continue;
            }
            guestList = guestList.filter(x => x != name);

        }
    }
    console.log(guestList.join('\n'));
}
// solve(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']
// );
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);