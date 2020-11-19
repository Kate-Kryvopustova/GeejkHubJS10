/*
1) Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Залить на github решение﻿
Нельзя использовать методы массива, а только циклы for, while*
Примеры массивов:
[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
[-1,-8,-2]
[1,7,3]
[1,undefined,3,5,-3]
[1,NaN,3,5,-3]
*/

const a = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
const b = [-1, -8, -2];
const c = [1, 7, 3];
const d = [1, undefined, 3, 5, -3];
const e = [1, NaN, 3, 5, -3];
const i = [0, true];
const f = [3, 0, -5, 1, 'lol', 44, -12, '58', 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]
const x = [NaN, 2, 3];



function maxNumber(arrayToCheck) {
  let maxValue;

  for (let i = 0; i < arrayToCheck.length; i++) {

    if (!isNaN(arrayToCheck[i]) && typeof arrayToCheck[i] === 'number') {

      if (typeof (maxValue) === 'undefined') {
        maxValue = arrayToCheck[i]
      }

      if (arrayToCheck[i] > maxValue) {
        maxValue = arrayToCheck[i]
      }
    }

  }

  return maxValue;
}

console.log(maxNumber(a));
console.log(maxNumber(b));
console.log(maxNumber(c));
console.log(maxNumber(d));
console.log(maxNumber(e));
console.log(maxNumber(i));
console.log(maxNumber(f));
console.log(maxNumber(x));


function minNumber(arrayToCheck) {
  let minValue;

  for (let i = 0; i < arrayToCheck.length; i++) {

    if (!isNaN(arrayToCheck[i]) && typeof arrayToCheck[i] === 'number') {

      if (typeof (minValue) === 'undefined') {
        minValue = arrayToCheck[i]
      }

      if (arrayToCheck[i] < minValue) {
        minValue = arrayToCheck[i]
      }
    }

  }

  return minValue;
}

console.log(minNumber(a)); 
console.log(minNumber(b)); 
console.log(minNumber(c)); 
console.log(minNumber(d)); 
console.log(minNumber(e)); 
console.log(minNumber(i));
console.log(minNumber(f));
console.log(minNumber(x));


function sumNumbers(arrayToCheck) {
  let sumValue = 0;

  for (let i = 0; i < arrayToCheck.length; i++) {

    if (isNaN(arrayToCheck[i])) {
      continue;
    } else if (typeof arrayToCheck[i] === 'number') {
      sumValue += arrayToCheck[i];
    }

  }

  return sumValue;
}

console.log(sumNumbers(a)); 
console.log(sumNumbers(b)); 
console.log(sumNumbers(c)); 
console.log(sumNumbers(d)); 
console.log(sumNumbers(e)); 
console.log(sumNumbers(i));
console.log(sumNumbers(f));
console.log(sumNumbers(x));  
