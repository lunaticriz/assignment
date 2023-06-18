/*
arr a = [1,5,3,[4,8,7,0,6,[7,9,7,8]]]
Required output :
arr a =[1,5,3,4,8,7,0,6,7,9,7,8]
*/

let newArr = [];
function flatArray(arr) {
  arr.forEach((e) => {
    if (Array.isArray(e)) {
      flatArray(e);
    } else {
      newArr.push(e);
    }
  });
  return newArr;
}

let a = [
  [1, 5, 3],
  [4, 8, 7, 0, 6, [7, 9, 7, 8]],
];
a = flatArray(a);
console.log(a);
// [1,5,3,4,8,7,0,6,7,9,7,8]
