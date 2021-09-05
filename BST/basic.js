class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
// console.log(BST);

//1. lease common ancestor
//2. find distance between root and branches

let LCA = (root, node_1, node_2) => {
    if (node_1 < root.data && node_2 < root.data) {
        return LCA(root.left, node_1, node_2);
    }
    else if (node_1 > root.data && node_2 > root.data) {
        return LCA(root.right, node_1, node_2);
    }
    else {
        return root
    }

}
// console.log(LCA(BST.root, 7, 13));
// 10
// console.log(LCA(BST.root, 7, 25));
// 15
// console.log(LCA(BST.root, 25, 22));
// 25
//LEFT = if both are less than root
//RIGHT = if both are greater than root
//ROOT = if one is less and other is greater


//Find distance between 2 nodes in BST
//1. find LCA
//2. find distance between LCA and node1

let distanceBetween2Nodes = (tree, node1, node2) => {
    let ancestor = LCA(tree.root, node1, node2)
    let countingSteps = (currNode, nodeToFind) => {
        if (currNode.data === nodeToFind) return 0
        if (currNode.data > nodeToFind) {
            return 1 + countingSteps(currNode.left, nodeToFind);
        }
        if (currNode.data < nodeToFind) {
            return 1 + countingSteps(currNode.right, nodeToFind);
        }
    }
    return countingSteps(ancestor, node1) + countingSteps(ancestor, node2);
}
// console.log(distanceBetween2Nodes(BST, 10, 25));
//2
// console.log(distanceBetween2Nodes(BST, 7, 25));
//3
// console.log(distanceBetween2Nodes(BST, 15, 10));
//1

let inOrderBST = (tree) => {
    let results = [];

    let traverse = (node) => {
        if(node === null) return;
        results.push(node.data);
        traverse(node.left);
        
        traverse(node.right);
        
    }
    traverse(tree.root)
    return results;
}
console.log(inOrderBST(BST));