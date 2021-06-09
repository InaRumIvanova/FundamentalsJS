function solve(arr) {
    let firstCurrentCommand = arr[0];
    firstCurrentCommand = firstCurrentCommand.split(' ');
    let currentCommand = arr.shift();
    let newArr = [];
    newArr.push(firstCurrentCommand);

    while (currentCommand !== "Play!") {
        currentCommand = currentCommand.split(" ");

        for (let i = 0; i < arr.length; i++) {
            
            for (let j = 0; j < firstCurrentCommand.length; j++) {
                if (currentCommand[i] === "Install") {
                    newArr.push(currentCommand[i + 1]);
                    break;
                }

                if (currentCommand[i] === "Uninstall") {
                    if (currentCommand[i + 1] === firstCurrentCommand[j]) {
                        firstCurrentCommand.splice(j, 1);
                        break;
                    }
                }
                if (currentCommand[i] === "Update") {
                    if (currentCommand[i + 1] === firstCurrentCommand[j]) {
                        newArr.push(firstCurrentCommand[j]);
                        firstCurrentCommand.splice(j, 1);
                        break;
                    }
                }
                if (currentCommand[i] === "Expansion") {
                    firstCurrentCommand.push(currentCommand[i + 1].split('-').join(':'));
                    break;
                }
            }

        }
        currentCommand = arr.shift();
    }
    console.log(newArr.join(' '));
}
solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);