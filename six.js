/**
 * Sort the arr a =[1,3,6,4,7,8,7] in ascending order without using predefined functions
 */
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = a[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return a;
}

let a = [1, 3, 6, 4, 7, 8, 7];
console.log(sortArr(a));

//[1, 3, 4, 6, 7, 7, 8];
