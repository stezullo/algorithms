/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = countLinkedList(head);
    if(length === n) {
        return head.next;
    }
    
    let top = head;
    
    for(let i = 0; i < length - n - 1; i++) {
        top = top.next;
    }
    let del = top.next;
    top.next = del.next;
    del = null;
    return head;
};

const countLinkedList = (head) => {
    let top = head;
    let count = 0;
    
    while(top != null) {
        ++count;
        top = top.next;
    }
    
    return count;
}
