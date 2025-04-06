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

  insert(value, root = this.root) {
    if (root.data === value) {
      console.log('Value is already in the tree!');
      return;
    } else if (root.data < value) {
      if (root.right === null) {
        root.right = new Node(value);
        return;
      }
      this.insert(value, root.right);
    } else {
      if (root.left === null) {
        root.left = new Node(value);
        return;
      }
      this.insert(value, root.left);
    }
  }
}

function prepareArr(arr) {
  const sortedArr = mergeSort(arr);
  const sortedArrUniq = [...new Set(sortedArr)];
  return sortedArrUniq;
}

function buildTree(arr, start, end) {
  if (start > end) return null;

  const middle = start + Math.floor((end - start) / 2);
  const node = new Node(arr[middle]);

  node.left = buildTree(arr, start, middle - 1);
  node.right = buildTree(arr, middle + 1, end);

  return node;
}

function buildTreeInit(arr) {
  return buildTree(arr, 0, arr.length - 1);
}

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

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = new Tree(prepareArr(testArr));
BST.insert(72);
prettyPrint(BST.root);
