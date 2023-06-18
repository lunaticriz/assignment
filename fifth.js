/*
2 sorted Arrays are given
1st array is in ascending order [ 2,5,7,9]
2nd array is in descending order [25, 15, 9,4,1]
Join the arrays
Use the argument and return combined sorted array (either is ascending or descending order).
Don't remove the concurrency.
*/

function joinSortedArrays(arr1, arr2, ascending = true) {
  let i = 0;
  let j = arr2.length - 1;
  let sign = ascending ? 1 : -1;
  let result = [];

  while (i < arr1.length && j >= 0) {
    if (arr1[i] * sign <= arr2[j] * sign) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j--;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j >= 0) {
    result.push(arr2[j]);
    j--;
  }

  if (!ascending) {
    result.reverse();
  }

  return result;
}

let arr1 = [2, 5, 7, 9];
let arr2 = [25, 15, 9, 4, 1];

console.log(joinSortedArrays(arr1, arr2, true));

// [1, 2, 4, 5, 7, 9, 9, 15, 25];
