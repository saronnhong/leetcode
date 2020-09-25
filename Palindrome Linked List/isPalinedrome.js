// 234. Palindrome Linked List
// Easy

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var isPalindrome = function(headNode) {
    let result = true;
    
    function helper(node){
        if(node === null) return;
        
        helper(node.next);
        console.log("front: "+headNode.val, "back: "+node.val);
        if(headNode.val != node.val){
            result = false;
            return ;
        }
        headNode = headNode.next;
    }

    helper(headNode);
    return result;
};