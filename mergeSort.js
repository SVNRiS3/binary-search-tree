function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const leftArray = mergeSort(arr.slice(0, arr.length / 2));
  const rightArray = mergeSort(arr.slice(arr.length / 2));
  let tmp = [];
  let i = 0;
  let j = 0;

  while (i <= leftArray.length && j <= rightArray.length) {
    if (leftArray.length === i) {
      tmp = tmp.concat(rightArray.slice(j));
      break;
    }
    if (rightArray.length === j) {
      tmp = tmp.concat(leftArray.slice(i));
      break;
    }
    if (leftArray[i] >= rightArray[j]) {
      tmp.push(rightArray[j]);
      j++;
    } else if (leftArray[i] < rightArray[j]) {
      tmp.push(leftArray[i]);
      i++;
    }
  }

  return tmp;
}
