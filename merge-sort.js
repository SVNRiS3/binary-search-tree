export default function mergeSort(arr, sortedArr = []) {
  //base case
  if (arr.length === 1) {
    return arr;
  }
  //recursive case
  //for item half of the array
  //push a if a< b else push b, where b is other half of the array
  if (left === right) {
    sortedArr.push(right.shift());
    left.shift();
  } else if (left > right) {
    sortedArr.push(right.shift());
    sortedArr.push(left.shift());
  } else {
    sortedArr.push(left.shift());
    sortedArr.push(right.shift());
  }
}
