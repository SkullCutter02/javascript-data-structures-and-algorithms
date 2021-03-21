class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;
        else if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  breadthFirstSearch() {
    const data = [];
    const queue = [];

    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  depthFirstPreOrderSearch() {
    const data = [];

    function traverse(node) {
      data.push(node);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  depthFirstPostOrderSearch() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node);
    }

    traverse(this.root);

    return data;
  }

  depthFirstInOrderSearch() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(7);
tree.insert(1);
tree.insert(10);
tree.insert(9);
tree.insert(0);
tree.insert(-5);
console.log(tree);
console.log(tree.find(7));
console.log(tree.depthFirstInOrderSearch());
