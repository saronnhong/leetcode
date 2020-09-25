// 863. All Nodes Distance K in Binary Tree
// We are given a binary tree (with root node root), a target node, and an integer value K.
// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
// Output: [7,4,1]

// Explanation: 
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.

// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.
 
// Note:
// The given tree is non-empty.
// Each node in the tree has unique values 0 <= node.val <= 500.
// The target node is a node in the tree.
// 0 <= K <= 1000.

// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5  , K = 2
// Note: to Convert Array into Binary Tree:
// Example where this is used, Heaps, see Heap Sort Target Practice in Outco curriculum:

// Left Child : 2*index + 1
// Right Child : 2*index + 2

// Visual: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png

// Output: [7,4,1]

// All  Nodes Distance K 

// INput: root node , target node , distance k 

// 1. While loop to traverse the tree until I find the target. BFS 
//     2. DFS to traverse form that target to until K = 0 , k<0 

//         3 
//        /  \
//       5    1 
//     / \   /  \
//   6   2   0    8 
//      / \
//     7  4