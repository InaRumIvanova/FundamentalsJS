function solve(arr){
    arr = arr.map(x => Number(x));
let countStudents = Number(arr.shift());
let countLectures = Number(arr.shift());
let bonus = Number(arr.shift());
let totalBonus = 0;
let maxNum = Number.MIN_VALUE;
let max = Number.MIN_VALUE;
for(let i = 0; i < countStudents; i++){
    
    if(arr[i] <= countLectures){
    if (arr[i] > max){
            max = arr[i];
    
}
    totalBonus = Math.ceil((max / countLectures)* (5 + bonus));
    }
    if(totalBonus > maxNum){
        maxNum = totalBonus;
        
    }
     
}
console.log("Max Bonus: "+maxNum+".");
console.log(`The student has attended ${max} lectures.`);

}
solve([5,25,30,
    12,19,24,16,20]);