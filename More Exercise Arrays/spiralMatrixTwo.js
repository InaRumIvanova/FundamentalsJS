function spiral(row,col){
    let oneRow = [];
for(let i = 1; i <= row*col; i++){
   for(let j = 1; j <= col; j++){
       oneRow.push(j);
       
   }
   if(i === col*row){
   oneRow.push(i-1);
   oneRow.push(i);
   
   }
   //break;
}
console.log(oneRow);
}
spiral(3,3);