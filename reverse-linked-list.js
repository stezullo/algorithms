/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} heade
 * @return {ListNode}
 */
const reverseList = (L) => {
    return recursive(L);
};


const iterative = (L) => {
    if(L !== null && L.next != null) {
        let first = L;
        let second = L.next;
        let third = L.next.next;
        
        first.next = null;
        
        while(third != null) {
            second.next = first;
            first = second;
            second = third;
            third = third.next;
        }
        
        second.next = first;
        
        return second;
        
    } 
    
    return L;
}

const recursive = (L) => {
    if(L != null && L.next != null) {
        let head = recursive(L.next);
        
        let elem = L.next;
        L.next = elem.next;
        
        if(head.next == null) {
            head = elem;
        }
        
        elem.next = L;
        
        return head;
    }

    return L;
}
