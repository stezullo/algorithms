/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let l = null, top = null;
    
    if(l1 == null){
        top = l2;
    }
    else if(l2 == null) {
        top = l1;
    }
    else {
        // Check value
        while(l1 != null && l2 != null) {
            if(l1.val < l2.val) {
                if(top != null) {
                    l.next = new ListNode(l1.val);
                }
                else {
                    l = new ListNode(l1.val);    
                }
                l1 = l1.next;
            }
            else {
                if(top != null) {
                    l.next = new ListNode(l2.val);
                }
                else {
                    l = new ListNode(l2.val);    
                }
                
                l2 = l2.next;
            }
            
            if(top == null) {
                top = l;   
            }
            else {
                l = l.next;
            }
        
            
        }
        
        while(l1 != null) {
            if(top != null) {
                l.next = new ListNode(l1.val);    
            }
            else{
                l = new ListNode(l1.val);
            }
            
            l1 = l1.next;
            
            if(top == null) {
                top = l;    
            }
            else {
                l = l.next;
            }
        }
        
        while(l2 != null) {
            if(top != null) {
                l.next = new ListNode(l2.val);    
            }
            else{
                l = new ListNode(l2.val);
            }
            
            l2 = l2.next;
            
            if(top == null) {
                top = l;    
            }
            else {
                l = l.next;
            }
        }
    }
    
    return top;
};
    
    
