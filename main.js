import mergeSort from './mergeSort.js';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTreeInit(arr);
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
  console.log({ start, middle, end });

  node.left = buildTree(arr, 0, middle - 1);
  node.right = buildTree(arr, middle + 1, arr.length - 1);

  return node;
}

function buildTreeInit(arr) {
  return buildTree(arr, 0, arr.length - 1);
}

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = new Tree(prepareArr(testArr));

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(BST.root);
