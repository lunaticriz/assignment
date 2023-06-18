/**
 * Write a function to create a 2-D List/Array with random integers between 0 to 100. This
 * function should take two arguments - numberOfRows and numberOfColumns and return a 2D list.
 */
function create2DArray(numberOfRows, numberOfColumns) {
  let arr = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(Math.floor(Math.random() * 101));
    }
    arr.push(row);
  }
  return arr;
}

console.log(create2DArray(3, 3));

// Output
/*
[
  [1, 86, 44],
  [67, 79, 75],
  [18, 56, 66],
];
*/
