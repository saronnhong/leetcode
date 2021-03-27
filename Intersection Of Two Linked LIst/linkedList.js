function ListNode(val) {
    this.val = val;
    this.next = null;
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(5);
let node2 = new ListNode(3);
let node3 = new ListNode(1);
let node4 = new ListNode(2);
node1.next = node2;
node2.next = node3;
node3.next = node4;


let headALength = 0;
let headBLength = 0;

while (node1 != null) {
    headALength++;
    node1 = node1.next;
}
console.log(headALength);
let offset = Math.abs(headBLength - headALength);
console.log(offset);