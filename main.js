import mergeSort from './mergeSort';

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}

function buildTree(arr) {
  const sortedArr = mergeSort(arr);
  const SortedArrUniq = [...new Set(sortedArr)];
}

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = new Tree(buildTree(testArr));
