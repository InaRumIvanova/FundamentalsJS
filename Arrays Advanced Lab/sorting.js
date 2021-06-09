function sorting(input){
    let result = [];
    //сортира елементите по възходящ ред;
    array = input.sort((a, b) => a - b);
    //цикълът да се върти, докато масивът има дължина;
    while(array.length !== 0){
        //добавяме към новия масив елемент(последният елемент и с поп режем и връщаме последният елемент);
      result.push(array[array.length-1]) && array.pop();
      //добавяме към масива първият елемент и махаме първия елемент;
      result.push(array[0]) && array.shift();
    }
 console.log(result.join(' '));
 }
 
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);