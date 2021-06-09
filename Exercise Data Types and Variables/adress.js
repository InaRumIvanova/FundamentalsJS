function solve(input){
    let catalog = {};
    for(let line of input){
        //parse input
        let [name,adress]=line.split(':');

        //store data
        catalog[name] = adress;

    }
    for(let name in catalog){
        console.log(`${name}->${catalog[name]}`);
    }

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);