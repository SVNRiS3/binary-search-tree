import mergeSort from './mergeSort';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.arr = prepareArr(arr);
    this.root = buildTree(this.arr);
  }
}

function prepareArr(arr) {
  const sortedArr = mergeSort(arr);
  const sortedArrUniq = [...new Set(sortedArr)];
  return sortedArrUniq;
}

function buildTree(arr, start, end) {
  if (start > end) return;

  const middle = Math.floor(end - start) / 2;
  const node = new Node(arr[middle]);

  node.left = buildTree(arr, 0, middle - 1);
  node.right = buildTree(arr, middle + 1, arr.length - 1);

  return node;
}

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = new Tree(buildTree(testArr));
