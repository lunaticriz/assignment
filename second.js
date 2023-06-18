/**
 * Write a function to sort the 2-D list based on column index keeping the rows intact. This
 * function should take two arguments - 2D list created above and column Index and return sorted
 * 2D list.
 */
function sort2DList(arr, index) {
  let newArr = arr.sort((a, b) => {
    return a[index] - b[index];
  });
  return newArr;
}

const arr = [
  [21, 4, 79],
  [6, 34, 43],
  [15, 54, 23],
];
console.log(sort2DList(arr, 2));

// Output
/*
[
  [15, 54, 23],
  [6, 34, 43],
  [21, 4, 79],
];
*/
