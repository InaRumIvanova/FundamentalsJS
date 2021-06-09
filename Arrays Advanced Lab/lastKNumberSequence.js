function lastSequence(n,k){
    let sequence = [1];

for(let i = 1; i < n; i++){
let lastK = (sequence.slice(-k));
let sum = 0;
for(let num of lastK){
    sum+=num;
}
sequence.push(sum);
}
console.log(sequence.join(' '));
}
lastSequence(6,3);