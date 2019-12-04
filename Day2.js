'use strict';

//Drill #1 - Max/min with while loop 
function max(numbers){
  let currentMax = numbers[0];
  let i = 0;
  while (i <= numbers.length){
    if (numbers[i] > currentMax){
      currentMax = numbers[i];
    }
    i++;
  }
}

function min(numbers){
  let currentMin = numbers[0];
  let i = 0;
  while(i <= numbers.length){
    if (numbers[i] < currentMin){
      currentMin = numbers[i];
    }
    i++;
  }
}

//Drill #2 - Compute the average with forEach 
function average(arr){
  let arrSum = 0;
  
}
