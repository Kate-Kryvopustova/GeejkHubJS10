/* 
Some cases:
[2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
[7, 0, 1, 3, 4, 1, 2, 1] // 9
[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
[2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
[2, 2, 2, 2, 2] // 0
*/

function waterLevel(arrayToCheck) {
  let result = 0;

  for (let i = 0; i < arrayToCheck.length; i++) {
    let left = arrayToCheck[i];
    let right = arrayToCheck[i];

    for (let j = 0; j < i; j++) {
      left = Math.max(left, arrayToCheck[j]);
    }

    for (let j = i + 1; j < arrayToCheck.length; j++) {
      right = Math.max(right, arrayToCheck[j]);
    }

    result += Math.min(left, right) - arrayToCheck[i];
  }

  return result;
}

let array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

console.log(waterLevel(array));