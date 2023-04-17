const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null
  }
  root() {
    return this.rootTree
  }

  add(data) {
    this.rootTree = addWithin(this.rootTree, data)

    function addWithin (node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.value === data) {
        return node
      }
      if (data < node.value) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchWithin(this.rootTree, data)

    function searchWithin(node, data) {
      if(!node) {
        return false
      }
      return data < node.value ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data)
    }
  }

  find(data) {
    
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)

    function removeNode(node, value) {
      if (!node) {
        return null
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else if (node.value < value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if(!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.value = minFromRight.value
        node.right = removeNode(node.right, minFromRight.value)

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left
    }
    return node.value
  }
  

  max() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.value
  }
}

module.exports = {
  BinarySearchTree
};